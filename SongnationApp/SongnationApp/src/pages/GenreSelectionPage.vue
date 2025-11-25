<template>
    <q-page class="genre-page-container">
        <div class="header-section q-pa-lg text-center">
            <h1 class="page-title">
                Que tipo de <span>composição</span> procura?
            </h1>
            <p class="page-subtitle">Selecione um estilo para ver os compositores disponíveis</p>
        </div>

        <div class="grid-container q-px-xl q-pb-xl">
            <div class="row q-col-gutter-md">

                <div
                    v-for="genre in genres"
                    :key="genre.id"
                    class="col-6 col-sm-4 col-md-3 col-lg-2"
                >
                    <GenreCard
                        :title="genre.name"
                        :icon="genre.icon"
                        :bg-image="genre.image"
                        @click="selectGenre(genre)"
                    />
                </div>

            </div>
        </div>

    </q-page>
</template>

<script setup>
import { mdiGuitarElectric } from '@mdi/js';
import { mdiMicrophoneVariant } from '@mdi/js';
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import GenreCard from 'src/components/GenreCard.vue'

const router = useRouter()

const genres = ref([
    {id: 1, name: 'Rock', icon: mdiGuitarElectric, slug: 'rock', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=400&q=80'},
    {id: 2, name: 'Rap', icon: mdiMicrophoneVariant, slug: 'rock', image: 'https://images.unsplash.com/photo-1505964253539-4ca5a36328dd?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
])

function selectGenre(genre) {
    console.log('Gênero selecionado: ', genre.name)
    router.push(`/compositores/${genre.slug}`)
}
</script>

<style scoped>
.genre-page-container {
    min-height: 100vh;
    color: white;
}

.page-title {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 8px;
    margin-top: 20px;
}

.page-title span{
    color: #8a3ffc;
}

.page-subtitle{
    color: #9ca3af;
    font-size: 16px;
}

.grid-container {
    max-width: 1400px;
    margin: 0 auto;
}
</style>