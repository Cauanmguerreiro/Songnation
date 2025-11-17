<template>
  <q-header bordered class="bg-dark text-white">
    <q-toolbar style="height: 64px">

      <q-btn
        flat dense round icon="menu"
        aria-label="Menu"
        @click="$emit('toggleDrawer')"
      />

      <q-space class="lt-md" />

      <q-input
        v-model="search"
        filled
        dark
        rounded
        dense
        placeholder="Search..."
        class="search-input q-mx-md col-xs-6 col-sm-5 col-md-4 col-lg-3"
        bg-color="input-dark"
      >
        <template #prepend><q-icon name="search" /></template>
      </q-input>

      <q-space />

      <q-btn flat dense round aria-label="Notificações">
        <q-icon name="notifications" />
        <q-badge floating color="primary" dot />
      </q-btn>

    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
</script>

<style scoped>
.search-input .q-field__control {
  background: none !important;
  color: white;
}
</style>