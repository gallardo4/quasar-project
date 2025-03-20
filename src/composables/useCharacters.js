import { ref, onMounted } from 'vue'
import axios from 'axios'

const apiURL = 'https://rickandmortyapi.com/api/character/'

const api = {
    async fetchCharacters() {
        try {
            const response = await axios.get(apiURL)
            return response.data.results
        } catch (error) {
            console.error('Error fetching characters:', error)
            throw error
        }
    },

    async fetchCharacter(id) {
        try {
            const response = await axios.get(`${apiURL}${id}`)
            return response.data
        } catch (error) {
            console.error('Error fetching character:', error)
            throw error
        }
    }
}

export function useCharacters() {
    const characters = ref([])

    const fetchCharacters = async () => {
        characters.value = await api.fetchCharacters()
    }

    onMounted(fetchCharacters)

    return { characters, fetchCharacters }
}

export function useCharacter(id) {
    const character = ref(null)

    const fetchCharacter = async () => {
        character.value = await api.fetchCharacter(id)
    }

    onMounted(fetchCharacter)

    return { character, fetchCharacter }
}
