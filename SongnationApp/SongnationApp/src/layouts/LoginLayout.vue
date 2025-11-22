<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">

    <q-page class="column flex-center bg-dark">

      <!-- LOGO CENTRALIZADO -->
      <div class="column items-center justify-center q-mt-xl">
        <img 
          src="#"
          alt="Logo"
          class="login-logo"
        />
      </div>

      <!-- FOOTER -->
      <div class="text-center q-mt-xl q-mb-xl">
        <q-separator spaced="lg" color="grey-8" />

        <img
          src=""
          alt="Hub Ânima Lab"
          style="max-width: 250px; opacity: 0.7"
        />
      </div>

    </q-page>

  </q-layout>
</template>

<script setup>
</script>

<style>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 24px;
  border-radius: 12px;
}
</style>
