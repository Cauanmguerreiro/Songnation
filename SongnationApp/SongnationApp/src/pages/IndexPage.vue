<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
<GigCard />
<GigCardPlaceholder />
  
</template>

<script setup>
//
import GigCard from 'src/components/GigCard.vue';
import GigCardPlaceholder from 'src/components/GigCardPlaceholder.vue';

</script>
