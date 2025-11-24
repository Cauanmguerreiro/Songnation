<template>
    <q-page class="search-container q-pa-md">
      
      <div class="row items-center q-mb-lg q-col-gutter-md">
        <div class="col-12 col-md-8">
          <h1 class="text-h4 text-weight-bold text-white q-my-none">
            Resultados para: <span class="text-primary">"{{ searchTerm }}"</span>
          </h1>
          <p class="text-grey-5 q-mt-xs">{{ totalResults }} resultados encontrados</p>
        </div>
        
        <div class="col-12 col-md-4 text-right">
          <q-select
            v-model="sortBy"
            :options="sortOptions"
            filled
            dark
            dense
            label="Ordenar por"
            class="sort-select"
            bg-color="grey-9"
          />
        </div>
      </div>
  
      <div class="row q-col-gutter-lg">
        
        
        <div class="col-12 col-md-3">
          <q-card flat class="filters-card q-pa-md">
            <div class="text-h6 text-white q-mb-md">Filtros</div>
  
            
            <div class="q-mb-lg">
              <div class="text-subtitle2 text-grey-4 q-mb-sm">Tipo</div>
              <q-option-group
                v-model="filters.type"
                :options="typeOptions"
                color="primary"
                dark
                type="checkbox"
              />
            </div>
  
            
            <div class="q-mb-lg">
              <div class="text-subtitle2 text-grey-4 q-mb-sm">Faixa de Preço (R$)</div>
  
              <div class="q-px-sm">
                <q-range
                  v-model="filters.priceRange"
                  :min="0"
                  :max="1000"
                  label
                  color="primary"
                  dark
                />
              </div>
  
              <div class="row justify-between text-caption text-grey-5 q-mt-sm">
                <span>R$ {{ filters.priceRange[0] }}</span>
                <span>R$ {{ filters.priceRange[1] }}</span>
              </div>
            </div>
  
            
            <div class="q-mb-lg">
              <div class="text-subtitle2 text-grey-4 q-mb-sm">Gêneros</div>
              <q-select
                v-model="filters.genres"
                multiple
                filled
                dense
                dark
                bg-color="grey-9"
                :options="genreOptions"
                label="Selecione gêneros"
                use-chips
              />
            </div>
  
            <q-btn 
              label="Aplicar Filtros" 
              color="primary" 
              class="full-width text-weight-bold"
              @click="applyFilters"
            />
          </q-card>
        </div>
  
        
        <div class="col-12 col-md-9">
          
         
          <div v-if="loading" class="row q-col-gutter-md">
            <div class="col-12 col-sm-6 col-lg-4" v-for="n in 6" :key="n">
              <GigCardPlaceholder /> 
            </div>
          </div>
  
          
          <div v-else-if="results.length > 0" class="row q-col-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-4" 
              v-for="gig in results" 
              :key="gig.id"
            >
              <GigCard :gig="gig" />
            </div>
          </div>
  
         
          <div v-else class="text-center q-py-xl">
            <q-icon name="music_off" size="64px" color="grey-7" />
            <h3 class="text-h5 text-grey-4 q-mt-md">Nenhum resultado encontrado</h3>
            <p class="text-grey-6">Tente ajustar os filtros ou buscar por outro termo.</p>
            <q-btn outline label="Limpar Filtros" color="primary" @click="clearFilters" />
          </div>
  
          
          <div class="row justify-center q-mt-xl" v-if="results.length > 0">
            <q-pagination
              v-model="page"
              :max="5"
              color="primary"
              active-color="accent"
              direction-links
              flat
              dark
            />
          </div>
  
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import GigCard from 'src/components/GigCard.vue'
  import GigCardPlaceholder from 'src/components/GigCardPlaceholder.vue'
  
  const route = useRoute()
  
  
  const searchTerm = ref('')
  const loading = ref(true)
  const results = ref([])
  const totalResults = ref(0)
  const page = ref(1)
  const sortBy = ref('relevance')
  
  
  const filters = ref({
    type: ['lyrics', 'beats'],
    priceRange: [0, 500],
    genres: []
  })
  
  
  const sortOptions = [
    { label: 'Relevância', value: 'relevance' },
    { label: 'Menor Preço', value: 'price_asc' },
    { label: 'Maior Preço', value: 'price_desc' },
    { label: 'Mais Recentes', value: 'newest' }
  ]
  
  const typeOptions = [
    { label: 'Letras', value: 'lyrics' },
    { label: 'Beats', value: 'beats' },
    { label: 'Feats/Vocal', value: 'vocals' }
  ]
  
  const genreOptions = ['Trap', 'Sertanejo', 'Funk', 'Pop', 'MPB', 'Rock']
  
  
  const mockDatabase = [
    { id: 1, title: "Letra Sertaneja Romântica", price: 150, type: 'lyrics', genre: 'Sertanejo' },
    { id: 2, title: "Trap Melódico – Flow Único", price: 200, type: 'beats', genre: 'Trap' },
    { id: 3, title: "Pop Comercial – Pronta pra Hit", price: 180, type: 'lyrics', genre: 'Pop' },
    { id: 4, title: "Beat Dark Estilo Matuê", price: 300, type: 'beats', genre: 'Trap' },
    { id: 5, title: "Composição Funk Consciente", price: 100, type: 'lyrics', genre: 'Funk' },
    { id: 6, title: "Vocal Feminino para Refrão", price: 250, type: 'vocals', genre: 'Pop' },
  ]
  
  
  const fetchResults = () => {
    loading.value = true
  
    setTimeout(() => {
      searchTerm.value = route.query.q || 'Todos'
  
      let filtered = mockDatabase.filter(item => {
        const priceMatch = item.price >= filters.value.priceRange[0] &&
                           item.price <= filters.value.priceRange[1]
  
        const typeMatch = filters.value.type.length === 0 ||
                          filters.value.type.includes(item.type)
  
        return priceMatch && typeMatch
      })
  
      if (sortBy.value === 'price_asc') filtered.sort((a,b) => a.price - b.price)
      if (sortBy.value === 'price_desc') filtered.sort((a,b) => b.price - a.price)
  
      results.value = filtered
      totalResults.value = filtered.length
      loading.value = false
    }, 500)
  }
  
  const applyFilters = () => fetchResults()
  
  const clearFilters = () => {
    filters.value.priceRange = [0, 1000]
    filters.value.type = ['lyrics', 'beats', 'vocals']
    fetchResults()
  }
  
  watch(() => route.query.q, () => fetchResults())
  
  onMounted(() => fetchResults())
  </script>
  
  <style scoped>
  .search-container {
    background: #16141a;
    min-height: 100vh;
  }
  
 
  .filters-card {
    background: #1e1b24;
    border: 1px solid #332d3b;
    border-radius: 12px;
    position: sticky;
    top: 20px;
  }
  
  .sort-select {
    max-width: 200px;
    margin-left: auto;
  }
  
  .text-primary {
    color: #8a3ffc !important;
  }
  

  @media (max-width: 599px) {
    .sort-select {
      max-width: 100%;
      margin-left: 0;
    }
    
    .filters-card {
      position: static;
      margin-bottom: 20px;
    }
  }
  </style>
  