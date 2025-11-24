<template>
  <q-page class="perfil-container q-pa-xl">

    <!-- TOP SECTION: Avatar + Name + Rating -->
    <div class="perfil-header row items-center q-gutter-lg">

      <!-- AVATAR -->
      <q-avatar size="110px" square>
        <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Bruno&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede" />
      </q-avatar>

      <!-- NAME + RATING -->
      <div class="column q-gutter-xs">

        <!-- NAME -->
        <div class="text-h4 text-weight-bold">{{artist.name}}</div>

        <!-- "Avaliação" text -->
        <div class="text-grey-5 text-caption">Avaliação</div>

        <!-- Stars -->
        <q-rating
          v-model="rating"
          max="5"
          size="28px"
          color="amber"
          icon="star"
          readonly
        />
      </div>

    </div>

    <!-- SECTION TITLE -->
    <div class="text-h5 text-weight-bold q-mt-xl q-mb-md">
      Composições
    </div>

    <!-- IMPORTED CARDS (TITLE + PRICE) -->
    <div class="cards-row">
      <GigCard
        v-for="g in generos"
        :key="g.id"
        :gig="g"
      />
    </div>

  </q-page>
</template>

<!-- 👇 ADICIONAR ESTE SCRIPT (RESOLVE ESLINT) -->
<script>
export default {
  name: "PerfilPage",
};
</script>

<script setup>
import { ref } from "vue";
<<<<<<< HEAD
import GigCard from "src/components/GigCard.vue"; // ⬅ using the card with value + name
import {useRoute} from 'vue-router';

const route = useRoute();

const allArtists = [
        { id: 1, name: 'Alex Morgan', role: 'Composer', genre: 'Pop & Electronic', rating: 4.9, count: '45+', verified: true, tags: ['pop', 'edm', 'party'] },
        { id: 2, name: 'Sarah Chen', role: 'Composer', genre: 'Classical & Orchestral', rating: 5.0, count: '78+', verified: true, tags: ['chill', 'focus', 'mood'] },
        { id: 3, name: 'Marcus Johnson', role: 'Composer', genre: 'Hip Hop & R&B', rating: 4.8, count: '32+', verified: true, tags: ['hip-hop', 'workout'] },
        { id: 4, name: 'Lisa Park', role: 'Composer', genre: 'Indie & Alternative', rating: 4.7, count: '23+', verified: false, tags: ['chill', 'mood', 'pop'] },
        { id: 5, name: 'André Mattos', role: 'Composer', genre: 'Rock & Metal', rating: 4.9, count: '56+', verified: true, tags: ['rock', 'workout'] },
        { id: 6, name: 'Emily Rose', role: 'Songwriter', genre: 'Country & Folk', rating: 4.6, count: '12+', verified: true, tags: ['country', 'chill'] },
]

const artistId = route.params.id;

const artist = allArtists.find(a => a.id == artistId)
=======
import GigCard from "src/components/GigCard.vue";
>>>>>>> 32f67573a10014e9471bd3abb7153afa6fb1ad29

const rating = ref(4);

const generos = ref([
  { id: 1, title: "Trap Melódico", price: 200 },
  { id: 2, title: "Sertanejo Hits", price: 150 },
  { id: 3, title: "Pop Comercial", price: 180 },
]);
</script>

<style scoped>
.perfil-container {
  background: #16141a;
  color: white;
}

.cards-row {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
}
</style>
