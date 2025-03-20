<script setup>
import { ref } from 'vue'

const showDialog = ref(false)
</script>

<template>
    <main class="flex flex-center q-pa-md">
        <q-btn color="primary" label="CLICK ME!" @click="showDialog = true" />

        <q-dialog v-model="showDialog">
            <q-card class="popup-card">
                <q-card-section>
                    <h2 class="text-h6">Welcome to my Quasar APP!</h2>
                    <p>Here you will find an extended table list with all Rick & Morty characters.</p>
                    <p>Enjoy!</p>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="Close" color="primary" @click="showDialog = false" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </main>
</template>

<style scoped>
.popup-card {
    width: 100%;
    padding: 16px;
    text-align: center;
}
</style>
