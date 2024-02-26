<script setup lang="ts">
import ArrowDown from '../ui/icons/ArrowDown.vue'
import ArrowUp from '../ui/icons/ArrowUp.vue'
</script>

<template>
  <div class="flex gap-1 justify-center items-center rounded-md border p-1 rounded-tr-none rounded-br-none">
    <ArrowDown class="h-5 w-5 hover:text-primary" />
    <span class="text-lg">33</span>
    <ArrowUp class="h-5 w-5 hover:text-primary" />
  </div>
</template>
