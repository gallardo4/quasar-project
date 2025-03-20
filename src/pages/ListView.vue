<script setup>
import { useCharacters } from '../composables/useCharacters'
import { useRouter } from 'vue-router'

const router = useRouter()
const { characters } = useCharacters()

const columns = [
    { name: 'name', label: 'Name', align: 'left', field: 'name' },
    { name: 'species', label: 'Species', align: 'left', field: 'species' },
    { name: 'status', label: 'Status', align: 'left', field: 'status' }
]

const viewDetails = (id) => {
    router.push({ name: 'CharacterDetail', params: { id } })
}
</script>

<template>
    <q-page>
        <q-table
            :rows="characters"
            :columns="columns"
            row-key="id"
            :rows-per-page-options="[10, 20]"
        >
            <template v-slot:body-cell-name="props">
                <q-td :props="props">
                    <q-btn flat dense color="primary" @click="viewDetails(props.row.id)" :label="props.row.name" />
                </q-td>
            </template>
        </q-table>
    </q-page>
</template>
