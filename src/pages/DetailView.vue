<script setup>
import { useCharacter } from '../composables/useCharacters'
import { useRoute } from 'vue-router'

const route = useRoute()
const { character } = useCharacter(route.params.id)
</script>

<template>
    <q-page class="flex flex-center">
        <div class="card-container">
            <q-card v-if="character" class="custom-card">
                <q-img :src="character.image" class="character-img" spinner-color="white" fit="cover" />
                <q-card-section>
                    <div class="text-h5 text-primary text-bold">{{ character.name }}</div>
                    <q-separator color="grey-4" />
                    <div class="info-item"><strong>Species:</strong> {{ character.species }}</div>
                    <div class="info-item"><strong>Status:</strong> {{ character.status }}</div>
                    <div class="info-item"><strong>Gender:</strong> {{ character.gender }}</div>
                    <div class="info-item"><strong>Origin:</strong> {{ character.origin?.name }}</div>
                    <div class="info-item"><strong>Location:</strong> {{ character.location?.name }}</div>
                </q-card-section>
            </q-card>

            <q-card v-else class="loading-card">
                <q-card-section>Loading character data...</q-card-section>
            </q-card>

            <q-btn class="custom-back-btn" unelevated @click="$router.back()" label="Back" />
        </div>
    </q-page>
</template>

<style scoped>
.custom-card {
    width: 90%;
    max-width: 400px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

.character-img {
    height: 250px;
    width: 100%;
    border-bottom: 2px solid #E0E0E0;
}

.info-item {
    font-size: 16px;
    margin: 6px 0;
    color: #444;
}

.loading-card {
    padding: 20px;
    text-align: center;
    font-size: 18px;
    color: #666;
}

.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.custom-back-btn {
    margin-top: 20px;
    background: #1976D2;
    color: white;
    width: 120px;
    font-weight: bold;
    transition: 0.3s;
}

.custom-back-btn:hover {
    background: #1565C0;
}
</style>
