<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="custom-header">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar class="custom-avatar">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Quasar App by Arnau Gallardo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="custom-drawer">
      <q-list>
        <q-item-label header class="drawer-title">Menu</q-item-label>

        <q-item clickable v-ripple to="/" class="drawer-item">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/list" class="drawer-item">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>Rick & Morty List</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="custom-footer">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <span class="footer-text">© 2025 Arnau Gallardo</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.custom-header {
  background: linear-gradient(45deg, #1976D2, #42A5F5);
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.custom-avatar {
  margin-right: 10px;
}

.custom-drawer {
  background-color: #263238;
  color: white;
}

.drawer-title {
  font-size: 1.2em;
  font-weight: bold;
  padding: 12px;
  color: #90CAF9;
}

.drawer-item {
  color: #263238;
  transition: background 0.3s ease;
}

.drawer-item:hover {
  background-color: #90CAF9;
}

.custom-footer {
  background: linear-gradient(45deg, #263238, #455055);
  color: white;
  padding: 10px 0;
}

.footer-text {
  font-size: 0.9em;
  margin-left: 10px;
  opacity: 0.8;
}
</style>
