<script setup lang="ts">
import ArrowDown from '../ui/icons/ArrowDown.vue'
import ArrowUp from '../ui/icons/ArrowUp.vue'
import type { StoryResponse } from '@/index'

defineProps<Pick<StoryResponse, 'score'>>()
</script>

<template>
  <div class="flex gap-1 justify-center items-center rounded-md border p-1 rounded-tr-none rounded-br-none">
    <ArrowDown class=" hover:text-primary h-4 w-4 lg:h-5 lg:w-5" />
    <span class="text-sm lg:text-lg">{{ score }}</span>
    <ArrowUp class=" hover:text-primary h-4 w-4 lg:h-5 lg:w-5" />
  </div>
</template>
