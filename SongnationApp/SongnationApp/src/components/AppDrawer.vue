<template>
  <q-drawer
    v-model="localValue"
    show-if-above
    :width="280"
    :breakpoint="1024"
    class="bg-dark text-white"
  >
    <div class="column full-height">

      <!-- Toolbar -->
      <q-toolbar style="height: 64px">
        <div class="drawer-brand row items-center no-wrap">
          <img src="/src/assets/textologo.png" alt="SongNation" class="text-logo" />
        </div>
        <q-btn dense flat round icon="close" class="lt-md"
          @click="localValue = false" />
      </q-toolbar>

      <!-- 👤 Perfil Component Added Here -->
      <PerfilCard />

      <q-scroll-area class="col">

        <q-list padding class="main-menu-list">
          <q-item v-for="(m, i) in menus" :key="i" clickable v-ripple :to="m.to">
            <q-item-section avatar><q-icon :name="m.icon" /></q-item-section>
            <q-item-section>{{ m.label }}</q-item-section>
          </q-item>
        </q-list>

        <q-list padding>
          <q-item-label header class="text-grey-6">Navegar</q-item-label>

          <q-item clickable v-ripple to="/compositores">
            <q-item-section avatar><q-icon name="music_note" /></q-item-section>
            <q-item-section>Compositores</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/cantores">
            <q-item-section avatar><q-icon name="mic" /></q-item-section>
            <q-item-section>Cantores</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/colaboracoes">
            <q-item-section avatar><q-icon name="people" /></q-item-section>
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
            <q-item-section>Seu Perfil</q-item-section>
          </q-item>
        </q-list>
      </div>

    </div>
  </q-drawer>
</template>


