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
    <q-page class="flex flex-center">
        <q-card class="custom-card">
            <q-card-section>
                <q-table
                    flat bordered
                    class="custom-table"
                    :rows="characters"
                    :columns="columns"
                    row-key="id"
                    :rows-per-page-options="[10, 20]"
                >
                    <template v-slot:body-cell-name="props">
                        <q-td :props="props">
                            <q-btn 
                                flat dense 
                                class="custom-btn" 
                                @click="viewDetails(props.row.id)" 
                                :label="props.row.name" 
                            />
                        </q-td>
                    </template>
                </q-table>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<style scoped>
.custom-card {
    width: 90%;
    max-width: 900px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
}

.custom-table {
    background: #f5f5f5;
    border-radius: 8px;
}

.custom-btn {
    color: #1976D2;
    font-weight: bold;
    transition: 0.3s;
}

.custom-btn:hover {
    color: #1565C0;
    text-decoration: underline;
}
</style>
