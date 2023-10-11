<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>