<script setup>
import VerifiedBadge from './VerifiedBadge.vue';
defineProps({
  name: { type: String, default: 'NOME' },
  role: { type: String, default: 'Composer' },
  genre: { type: String, default: 'GENERO' },
  rating: { type: Number, default: 4.9 },
  count: { type: String, default: '45+' },
  isVerified: { type: Boolean, default: true }
});
</script>

<template>
  <div class="card">
    <div v-if="isVerified" class="badge-container">
      <VerifiedBadge />
    </div>

    <div class="card-content">
      
      <div class="header-row">
        <h2 class="name">{{ name }}</h2>
        <div class="rating">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" class="star-icon">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/> //caminho pro iconezinho de estrela
          </svg>
          <span>{{ rating }}</span>
        </div>
      </div>

      <p class="role">{{ role }}</p>

      <div class="footer-row">
        <span class="genre">{{ genre }}</span>
        <span class="count">{{ count }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 320px;
  height: 400px;
  background-color: #16121f;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  font-family: 'Inter', sans-serif;
  border: 1px solid #2a2636;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

.card:hover{
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    border-color: #4f60f0;
}

.badge-container {
  position: absolute;
  top: 20px;
  right: 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  font-weight: 600;
}

.star-icon {
  width: 18px;
  height: 18px;
}

.role {
  color: #9ca3af;
  margin: 0 0 24px 0;
  font-size: 1rem;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  font-size: 0.9rem;
}
</style>