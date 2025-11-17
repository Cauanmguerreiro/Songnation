<template>
    <q-card class="gig-card q-pa-md column justify-between">
        <!--TAG-->
        <div class="tag">
        {{ tag }}
        </div>

        <!--AREA DA IMAGEM-->
        <div class="image-area q-mt-sm"></div>

        <!--CONETUDO DO CARD-->
        <div class="q-mt-md">
            <div class="title">{{ title }}</div>
            <div class="artit">by {{ artist }}</div>

            <div class="info-row q-mt-sm">
                <div class="icon-text">
                    <q-icon name="music_note" size="18px"/>
                    <span>{{ genre }}</span>
                </div>

                <div class="icon-text">
                    <q-icon name="attach_money" size="18px"/>
                    <span>{{ price }}</span>
                </div>

                <div class="icon-text">
                    <q-icon name="schedule" size="18px"/>
                    <span>{{ delivery }}</span>
                </div>
            </div>
        </div>

        <!--BOTAO-->
        <q-btn 
            class="details-btn q-mt-md"
            label="Ver Detalhes"
            unelevated
            @click="onClick"
        />
    </q-card>
</template>

<script>
export default {
    name: "GigCard",

    props:{
        tag: {type: String, default: "Singer"},
        title: {type: String, default: "TITULO"},
        artist: {type: String, default: "ARTISTA"},
        genre: {type: String, default: "GENERO"},
        price: {type: String, default: "$VALOR"},
        delivery: {type: String, default: "TEMPO DE ENTREGA"},
    },

    methods:{
        onClick() {
            this.$emit("details");
        }
    }
};
</script>

<style scoped> 
    .gig-card {
        width: 320px;
        height: 400px;
        background: #1b1123;
        border-radius: 20px;
        color: #ddd;
        display: flex;
    }

    .tag {
        align-self: flex-start;
        background: #5a2fcf;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        color: white;
    }

    .image-area {
        background: linear-gradient(to bottom, #2b1a3a, #1b1123);
        height: 120px;
        width: 100%;
        border-radius: 12px;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .artist {
        font-size: 14px;
        color: #999;
    }

    .info-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .icon-text {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        color: #c7c7c7;
    }

    .details-btn {
        background: #7d2ae8;
        width: 100%;
        border-radius: 12px;
        padding: 8px;
        color: white;
    }
</style>