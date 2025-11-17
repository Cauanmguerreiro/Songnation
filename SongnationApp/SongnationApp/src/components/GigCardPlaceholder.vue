<template>
  <q-card class="gig-card q-pa-md column justify-between">

    <!-- TAG PLACEHOLDER -->
    <q-skeleton type="rect" class="tag-skeleton" />

    <!-- IMAGEM PLACEHOLDER -->
    <q-skeleton class="image-area-skeleton q-mt-sm" square />

    <!-- TEXTO DO CARD PLACEHOLDER -->
    <div class="q-mt-md column q-gutter-sm">
      <q-skeleton type="text" width="70%" />
      <q-skeleton type="text" width="40%" />

      <div class="info-row q-mt-sm">
        <q-skeleton type="text" width="60%" />
        <q-skeleton type="text" width="50%" />
        <q-skeleton type="text" width="45%" />
      </div>
    </div>

    <!-- BOTÃO PLACEHOLDER -->
    <q-skeleton class="details-btn-skeleton q-mt-md" height="42px" square />
  </q-card>
</template>



<script>
export default {
  name: "GigCardPlaceholder"
};
</script>



<style scoped>
.gig-card {
  width: 320px;
  height: 400px;
  background: #1b1123;
  border-radius: 20px;
}

.tag-skeleton {
  width: 80px;
  height: 22px;
  border-radius: 12px;
}

.image-area-skeleton {
  height: 120px;
  width: 100%;
  border-radius: 12px;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.details-btn-skeleton {
  width: 100%;
  border-radius: 12px;
}
</style>
