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
        <div class="text-h4 text-weight-bold">Artista</div>

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

<script setup>
import { ref } from "vue";
import GigCard from "src/components/GigCard.vue"; // ⬅ using the card with value + name

const rating = ref(4);

const generos = ref([
  { id: 1, title: "Trap Melódico", price: 200 },
  { id: 2, title: "Sertanejo Hits", price: 150 },
  { id: 3, title: "Pop Comercial", price: 180 }
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
