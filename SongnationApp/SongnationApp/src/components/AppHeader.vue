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

        <q-btn
          label="Entrar"
          color="primary"
          class="hero-login-btn"
          @click="openLogin"
        />

    </q-toolbar>

    <q-dialog v-model="showLoginModal">
      <LoginComponent />
    </q-dialog>

  </q-header>
</template>

<script setup>
import { ref } from 'vue'
import LoginComponent from 'src/components/LoginComponent.vue' // Assuming this path

const search = ref('')
const showLoginModal = ref(false)

function openLogin() {
  console.log('Abrindo modal de login...')
  showLoginModal.value = true
}
</script>

<style scoped>
.search-input .q-field__control {
  background: none !important;
  color: white;
}
</style>