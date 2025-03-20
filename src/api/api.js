import axios from 'axios'

const apiURL = 'https://rickandmortyapi.com/api/character/'

export default {
    getCharacters() {
        return axios.get(apiURL)
    }
}

export const getCharacter = (id) => {
    return axios.get(apiURL + id)
}