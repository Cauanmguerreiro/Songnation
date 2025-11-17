<template>
  <q-page class="index-container">

    <!-- HERO -->
    <section class="hero-section q-pa-xl">
      <div class="hero-content text-center">

        <h1 class="hero-title">
          Conectando <span>Compositores</span> e <span>Artistas</span><br />
          para criar os próximos hits do Brasil.
        </h1>

        <p class="hero-subtitle">
          Descubra letras inéditas, encontre seu próximo sucesso e dê voz a novos talentos.
        </p>

        <!-- Busca principal -->
        <div class="search-wrapper q-mt-lg">
          <q-input
            v-model="search"
            filled
            placeholder="Busque letras, gêneros, temas, ou palavras-chave..."
            class="main-search"
            dense
            clearable
            debounce="300"
            @keyup.enter="goToSearch"
            :loading="loadingSearch"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

      </div>
    </section>

    <!-- SEÇÕES DE CONTEÚDO -->
    <section class="content-sections q-px-xl q-pb-xl">

      <!-- 1. Destaques da Semana -->
      <div class="section-block">
        <div class="section-header row justify-between items-center q-mb-sm">
          <h2>Artistas Em Destaque</h2>
          <q-btn flat label="Ver tudo" to="/destaques" color="primary" />
        </div>

        <div v-if="loading" class="cards-row">
          <GigCardPlaceholder v-for="n in 5" :key="'p1-'+n" />
        </div>

        <div v-else class="cards-row">
          <GigCard v-for="g in destaqueGigs" :key="g.id" :gig="g" />
        </div>

      </div>

      <!-- 2. Gêneros Populares -->
      <div class="section-block">
        <div class="section-header row justify-between items-center q-mb-sm">
          <h2>Gêneros Populares</h2>
          <q-btn flat label="Explorar" to="/generos" color="primary" />
        </div>

        <div class="cards-row">
          <template v-if="loading">
            <GigCardPlaceholder v-for="n in 5" :key="'p2-'+n" />
          </template>

          <template v-else>
            <GigCard v-for="g in generosPopulares" :key="g.id" :gig="g" />
          </template>
        </div>
      </div>

      <!-- 3. Compositores em Alta -->
      <div class="section-block">
        <div class="section-header row justify-between items-center q-mb-sm">
          <h2>Novos Artista</h2>
          <q-btn flat label="Ver ranking" to="/compositores" color="primary" />
        </div>

        <div class="cards-row">
          <template v-if="loading">
            <GigCardPlaceholder v-for="n in 5" :key="'p3-'+n" />
          </template>

          <template v-else>
            <GigCard v-for="g in compositoresAlta" :key="g.id" :gig="g" />
          </template>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GigCard from 'src/components/GigCard.vue'
import GigCardPlaceholder from 'src/components/GigCardPlaceholder.vue'

const search = ref('')
const loadingSearch = ref(false)

const loading = ref(true)
const destaqueGigs = ref([])
const generosPopulares = ref([])
const compositoresAlta = ref([])

function goToSearch() {
  if (!search.value.trim()) return
  loadingSearch.value = true
  window.location.href = `/buscar?q=${encodeURIComponent(search.value)}`
}

onMounted(() => {
  setTimeout(() => {
    destaqueGigs.value = [
      { id: 1, title: "Letra Sertaneja Romântica", price: 150 },
      { id: 2, title: "Trap Melódico – Flow Único", price: 200 },
      { id: 3, title: "Pop Comercial – Pronta pra Hit", price: 180 }
    ]

    generosPopulares.value = destaqueGigs.value
    compositoresAlta.value = destaqueGigs.value

    loading.value = false
  }, 1500)
})
</script>

<style scoped>
/* HERO */
.hero-section {
  width: 100%;
  min-height: 320px;
  background-image: url('src/assets/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  color: white;
}

/* DARK OVERLAY SEM REMOVER A IMAGEM */
.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.815);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  color: white;
}

.hero-title span {
  color: #8a3ffc;
}

.hero-subtitle {
  margin-top: 12px;
  font-size: 18px;
  color: #d1c7dd;
}

.search-wrapper {
  max-width: 640px;
  margin: 0 auto;
}

.main-search {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 40px;
}

.cards-row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 4px 0;
}

.cards-row::-webkit-scrollbar {
  height: 6px;
}

.cards-row::-webkit-scrollbar-thumb {
  background: #443a50;
  border-radius: 20px;
}

.section-header h2 {
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.section-block {
  margin-top: 40px;
}

.index-container {
  background: #16141a;
  color: white;
}
</style>
