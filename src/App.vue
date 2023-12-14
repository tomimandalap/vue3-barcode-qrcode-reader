<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-gray-900 h-10 flex justify-around items-center text-sm sm:text-base">
    <RouterLink to="/" class="hover:text-gray-300 text-white">Home</RouterLink>
    <RouterLink to="/example" class="hover:text-gray-300 text-white">Another example</RouterLink>
  </nav>
  <RouterView />
</template>
