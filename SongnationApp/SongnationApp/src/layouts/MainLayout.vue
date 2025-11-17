<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <AppHeader @toggleDrawer="toggleLeftDrawer" />
    <AppDrawer v-model="leftDrawerOpen" :menus="menus" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from 'src/components/AppHeader.vue'
import AppDrawer from 'src/components/AppDrawer.vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)

const menus = [
  { label: 'Início', icon: 'home', to: '/' },
  { label: 'Pesquisar', icon: 'search', to: '/pesquisar' },
  { label: 'Biblioteca', icon: 'bar_chart', to: '/biblioteca' },
  { label: 'Criar Projeto', icon: 'add', to: '/criar-projeto' },
  { label: 'Curtidos', icon: 'favorite_border', to: '/sons-curtidos' }
]
</script>

<style scoped>
.main-layout {
  background: #18181b;
}
</style>
