<script setup>
import { useCharacter } from '../composables/useCharacters'
import { useRoute } from 'vue-router'

const route = useRoute()
const { character } = useCharacter(route.params.id)
</script>

<template>
    <q-page>
        <q-card v-if="character">
            <q-card-section>
                <div class="text-h6">{{ character.name }}</div>
                <div><strong>Species:</strong> {{ character.species }}</div>
                <div><strong>Status:</strong> {{ character.status }}</div>
                <div><strong>Gender:</strong> {{ character.gender }}</div>
                <div><strong>Origin:</strong> {{ character.origin?.name }}</div>
                <div><strong>Location:</strong> {{ character.location?.name }}</div>
            </q-card-section>
        </q-card>
        <q-card v-else>
            <q-card-section>Loading character data...</q-card-section>
        </q-card>
        <q-btn flat color="primary" @click="$router.back()" label="Back" />
    </q-page>
</template>
