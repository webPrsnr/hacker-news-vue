<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/shared/Header.vue'
</script>

<template>
  <div class="relative h-dvh overflow-y-scroll">
    <Header />
    <RouterView />
  </div>
</template>
