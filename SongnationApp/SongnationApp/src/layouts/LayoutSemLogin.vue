<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <AppHeader @toggleDrawer="toggleLeftDrawer" @openLogin="showLoginModal = true" />
    <AppDrawerSemLogin v-model="leftDrawerOpen" :menus="menus" />
    <q-page-container>
      <router-view />
    </q-page-container>
    
    <!-- LOGIN MODAL -->
    <LoginComponent v-if="showLoginModal" v-model="showLoginModal" />

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from 'src/components/AppHeaderSemLogin.vue'
import AppDrawerSemLogin from 'src/components/AppDrawerSemLogin.vue'
import LoginComponent from 'src/components/LoginComponent.vue'

const leftDrawerOpen = ref(false)
const showLoginModal = ref(false)

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)

const menus = [
  { label: 'Início', icon: 'home', to: '/' },
  { label: 'Pesquisar', icon: 'search', to: '/pesquisar' },
  { label: 'Biblioteca', icon: 'bar_chart', to: '/biblioteca' },
  { label: 'Perfil', icon: 'account_circle', to: '/perfil' },
  { label: 'Criar Composição', icon: 'edit', to: '/criar-composicao' },
]
</script>

<style scoped>
.main-layout {
  background: #18181b;
}
</style>
