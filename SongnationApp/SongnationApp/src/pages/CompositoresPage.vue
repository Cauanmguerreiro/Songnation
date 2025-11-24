    <template>
        <q-page class="page-container">
            <div class="header-section q-px-xl q-pt-xl q-mb-lg">
                <h1 class="page-title">
                    Descubra Compositores
                    <span v-if="genreName" class="genre-highlight">de {{ genreName }}</span>
                </h1>
                <p class="page-subtitle">
                    Se conecte com incríveis compositores e garanta o próximo hit.
                </p>
            </div>

            <div class="list-section q-px-xl q-pb-xl">
                <div class="section-label q-mb-md">Todos</div>

                <div class="row q-col-gutter-lg">

                    <div
                        v-for="artist in filteredArtists"
                        :key="artist.id"
                        class="col-12 col-sm-6 col-md-4"
                    >
                        <ProfileCard 
                            :id="artist.id"
                            :name="artist.name"
                            :role="artist.role"
                            :genre="artist.genre"
                            :rating="artist.rating"
                            :count="artist.count"
                            :isVerified="artist.verified"
                        />
                    </div>
                    
                </div>

                <div v-if="filteredArtists.length === 0" class="empty-state">
                    <q-icon name="sentiment_dissatisfied" size="64px" color="grey-7" />
                    <p>Nenhum compositor encontrado para este gênero</p>
                    <q-btn flat color="primary" label="Voltar para Gêneros" to="/generos" />
                </div>

            </div>
        </q-page>
    </template>

    <script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import ProfileCard from 'src/components/ProfileCard.vue'

    const route = useRoute()

    const genreSlug = computed(() => route.params.genreSlug) //pega o parametro da url, tipo rock, pop e tals

    const genreName = computed(() => {
        if (!genreSlug.value) return ''
        return genreSlug.value
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    })

    //banco de dados simulator uwu
    const allArtists = [
        { id: 1, name: 'Alex Morgan', role: 'Composer', genre: 'Pop & Electronic', rating: 4.9, count: '45+', verified: true, tags: ['pop', 'edm', 'party'] },
        { id: 2, name: 'Sarah Chen', role: 'Composer', genre: 'Classical & Orchestral', rating: 5.0, count: '78+', verified: true, tags: ['chill', 'focus', 'mood'] },
        { id: 3, name: 'Marcus Johnson', role: 'Composer', genre: 'Hip Hop & R&B', rating: 4.8, count: '32+', verified: true, tags: ['hip-hop', 'workout'] },
        { id: 4, name: 'Lisa Park', role: 'Composer', genre: 'Indie & Alternative', rating: 4.7, count: '23+', verified: false, tags: ['chill', 'mood', 'pop'] },
        { id: 5, name: 'André Mattos', role: 'Composer', genre: 'Rock & Metal', rating: 4.9, count: '56+', verified: true, tags: ['rock', 'workout'] },
        { id: 6, name: 'Emily Rose', role: 'Songwriter', genre: 'Country & Folk', rating: 4.6, count: '12+', verified: true, tags: ['country', 'chill'] },
    ]

    const filteredArtists = computed(() => {
        if (!genreSlug.value) return allArtists

        const filtered = allArtists.filter(a => a.tags.includes(genreSlug.value))

        //ta retornando todos ainda

        return filtered.length > 0 ? filtered : allArtists
    })
    </script>

    <style scoped>
    .page-container{
        min-height: 100vh;
        color: white;
        font-family: 'Inter', sans-serif;
    }

    .page-title{
        font-size: 32px;
        font-weight: 700;
        margin: 0 0 8px 0;
        color: #fffffe;
    }

    .genre-highlight {
        color: #8a3ffc;
    }

    .page-subtitle {
        color: #94a1b2;
        font-size: 16px;
        max-width: 600px;
        margin: 0;
    }

    .section-label {
        font-size: 18px;
        font-weight: 700;
        color:white;
    }

    .artist-col {
        display: flex;
        justify-content: center;
    }

    .empty-state{
        text-align: center;
        padding: 60px;
        color: #94a1b2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
    </style>