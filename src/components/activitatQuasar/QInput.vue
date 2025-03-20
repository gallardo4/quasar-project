<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            text: ref('')
        }
    }
}
</script>

<template>
    <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
            <q-input v-model="text" label="Standard" />
        </div>
    </div>
</template>