<script setup>
// Não precisa de lógica complexa por enquanto
</script>

<template>
  <div class="verified-badge">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="3" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>Verified</span>
  </div>
</template>

<style scoped>
.verified-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #3b4cca; /* Azul parecido com a imagem */
  color: white;
  padding: 6px 12px;
  border-radius: 99px; /* Pílula */
  font-family: sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.icon {
  width: 14px;
  height: 14px;
}
</style>