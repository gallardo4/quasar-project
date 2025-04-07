# 📘 Manual tècnic - Aplicació Rick and Morty amb Quasar

## 🎯 Objectiu del projecte

Crear una aplicació utilitzant **Quasar Framework** i **Vue 3 (Composition API Script Setup)** que consumeixi l’API pública de Rick and Morty i mostri els personatges en format de targetes, taules i diàlegs.

---

## 🧩 Components de Quasar utilitzats

### 🔹 `q-btn`
Botó amb estils personalitzats.

### 🔹 `q-card`
Contenidor per mostrar informació dels personatges de forma visual.

### 🔹 `q-card-section`
Secció dins de la targeta per mostrar contingut com el nom, l'espècie o l'estat.

### 🔹 `q-card-actions`
Part inferior de la targeta on es col·loquen els botons d'acció.

### 🔹 `q-dialog`
Finestra emergent que mostra informació sobre el projecte.

### 🔹 `q-image`
Component per mostrar la imatge d’un personatge.

### 🔹 `q-page`
Layout principal per mostrar tot el contingut dins de l'aplicació.

### 🔹 `q-table`
Taula interactiva que mostra els personatges amb opcions de cerca i ordenació.

### 🔹 `q-td`
Cel·la d’una fila de la taula, utilitzada per personalitzar continguts com botons o imatges.

---

## 🔌 Consum de l’API de Rick and Morty

### 🌐 URL base

```
https://rickandmortyapi.com
```

### 📥 Endpoints utilitzats

#### ✅ `/api/character`

Aquest endpoint retorna una **llista de personatges**.  
Utilitzat dins la funció `fetchCharacters()` per obtenir tots els personatges disponibles.

##### Exemple de codi:

```js
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
```

---

#### ✅ `/api/character/:id`

Aquest endpoint retorna **les dades d’un personatge concret**, indicant el seu id.  
Implementat a la funció fetchCharacter() per mostrar els detalls d’un personatge seleccionat.

##### Exemple de codi:

```js
const api = {
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

export function useCharacter(id) {
    const character = ref(null)

    const fetchCharacter = async () => {
        character.value = await api.fetchCharacter(id)
    }

    onMounted(fetchCharacter)

    return { character, fetchCharacter }
}
```

---