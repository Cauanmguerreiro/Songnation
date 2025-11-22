<template>
  <LayoutSemLogin v-if="!isAuthenticated" />
  <MainLayout v-else />
</template>

<script>
import { defineComponent, computed } from 'vue';
import LayoutSemLogin from './LayoutSemLogin.vue';
import MainLayout from './MainLayout.vue';

export default defineComponent({
  name: 'AppLayout',
  components: {
    LayoutSemLogin,
    MainLayout,
  },
  setup() {
    // Verifica se há token no localStorage
    const isAuthenticated = computed(() => {
      return !!localStorage.getItem('authToken'); // Ajuste conforme o nome da sua chave
    });
    
    return {
      isAuthenticated,
    };
  },
});
</script>