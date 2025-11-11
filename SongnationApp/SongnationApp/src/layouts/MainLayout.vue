<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="280"
      :breakpoint="1024"
      class="bg-dark text-white"
    >
      <div class="column full-height">
        
        <q-toolbar style="height: 64px">
          <!-- Brand: logo + title -->
          <div class="drawer-brand row items-center no-wrap">
            <!-- default logo (substitua por /src/assets/textologo.png se desejar) -->
            <img src="/src/assets/logodrawer.png" alt="Songnation" class="logo" />

            <!-- substitui o título textual por uma imagem de texto -->
            <img src="/src/assets/textologo.png" alt="SongNation" class="text-logo" />
          </div>

          <q-btn
            dense flat round
            icon="close"
            class="lt-md"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </q-toolbar>

        <q-scroll-area class="col">


          
          <q-list padding class="main-menu-list">

          <q-item clickable v-ripple to="/">
            <q-item-section avatar> <q-icon name="home" /> </q-item-section>
            <q-item-section>Início</q-item-section>
          </q-item>
          
            <q-item clickable v-ripple to="/pesquisar">
              <q-item-section avatar> <q-icon name="search" /> </q-item-section>
              <q-item-section>Pesquisar</q-item-section>
            </q-item>
          
            <q-item clickable v-ripple to="/biblioteca">
              <q-item-section avatar> <q-icon name="bar_chart" /> </q-item-section>
              <q-item-section>Biblioteca</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/criar-projeto">
              <q-item-section avatar> <q-icon name="add" /> </q-item-section>
              <q-item-section>Criar Projeto</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/sons-curtidos">
              <q-item-section avatar> <q-icon name="favorite_border" /> </q-item-section>
              <q-item-section>Sons Curtidos</q-item-section>
            </q-item>
          </q-list>

          <q-list padding class="main-menu-list">
            <q-item-label header class="text-grey-6">Navegar</q-item-label>
            
            <q-item clickable v-ripple to="/compositores">
              <q-item-section avatar> <q-icon name="music_note" /> </q-item-section>
              <q-item-section>Compositores</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/cantores">
              <q-item-section avatar> <q-icon name="mic" /> </q-item-section>
              <q-item-section>Cantores</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/colaboracoes">
              <q-item-section avatar> <q-icon name="people" /> </q-item-section>
              <q-item-section>Colaborações</q-item-section>
            </q-item>
          </q-list>

        </q-scroll-area>

        <div class="col-auto">
          <q-separator dark />
          <q-list>
            <q-item clickable v-ripple to="/perfil">
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white" icon="account_circle" size="md" />
              </q-item-section>
              <q-item-section>
                Your Profile
              </q-item-section>
            </q-item>
          </q-list>
        </div>

      </div>
    </q-drawer>

    <!-- 
      QHeader para abrigar a barra de ferramentas.
      'bordered' adiciona uma borda sutil na parte inferior.
    -->
    <q-header bordered class="bg-dark text-white">
      <q-toolbar style="height: 64px">
        
        <!-- 1. Botões da Esquerda (Menu, Voltar, Avançar) -->

        <!-- Botão do Menu (para abrir/fechar o drawer) -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />



        <!-- 
          2. Campo de Busca Centralizado
          Usamos 'q-space' antes e depois (em telas grandes) e classes
          de grid (col-md-5) para dar um tamanho responsivo.
        -->
        <q-space class="lt-md" /> <!-- Espaço em mobile para centralizar a busca -->

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
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- 
          Q-Space principal para empurrar os ícones da direita
        -->
        <q-space />

        <!-- 3. Botões da Direita (Notificações) -->
        <q-btn flat dense round aria-label="Notificações">
          <!-- O ícone do sino -->
          <q-icon name="notifications" />
          
          <!-- 
            O QBadge cria o ponto de notificação.
            'floating' e 'transparent' com 'color' o posicionam.
          -->
          <q-badge floating color="primary" dot />
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'


// Esta variável controla se o drawer está aberto ou fechado em modo mobile
const leftDrawerOpen = ref(false)

// Função usada pelo botão do menu para alternar o drawer
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// Estado do campo de busca
const search = ref('')
</script>

<style lang="scss" scoped src="../css/main-layout.scss"></style>
