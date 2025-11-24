<template>
    <div class="genre-card" @click="$emit('click')" :style="{backgroundImage: `url(${bgImage})`}">
        <div class="overlay"></div>

        <div class="content">
            <q-icon :name="icon" class="genre-icon"/>
            <h3 class="genre-title">{{ title }}</h3>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {type: String, required: true},
    icon: {type: String, default: 'music_note'},
    bgImage: {type: String, default: ''} //aqui é o URL da imagem
})

defineEmits(['click'])
</script>

<style scoped>
.genre-card {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background-position: center;
    background-color: #2a2636;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transform: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.genre-card:hover{
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    border-color: #8a3ffc;
}

.overlay{
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
    transition: background 0.3s ease;
}

.genre-card:hover .overlay{
    background: linear-gradient(to bottom, rgba(138, 63, 252, 0.2), rgba(0, 0, 0, 0.9));
}

.content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: white;
}

.genre-icon {
    font-size: 48px;
    opacity: 0.9;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.genre-card:hover .genre-icon{
    transform: scale(1.2);
    color: #fff;
}

.genre-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
}
</style>