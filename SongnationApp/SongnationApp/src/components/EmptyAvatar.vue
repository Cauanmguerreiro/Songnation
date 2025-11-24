<template>
  <div
    class="flex items-center justify-center rounded-full overflow-hidden"
    :style="{
      width: size + 'px',
      height: size + 'px',
      background: bgColor,
    }"
  >
    <svg
      viewBox="0 0 24 24"
      :width="size * 0.6"
      :height="size * 0.6"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- Cabeça -->
      <circle cx="12" cy="8" r="4" />
      <!-- Ombros -->
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 64 },
  bgColor: { type: String, default: "#1A73E8" } // azul padrão estilo Google
});
</script>
