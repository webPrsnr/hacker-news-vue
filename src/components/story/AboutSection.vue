<script setup lang="ts">
import utils from './utils'
import type { StoryResponse } from '@/index'

interface AboutSectionProps extends Pick<StoryResponse, 'by' | 'time' | 'url'> {
  kids: number[] | undefined
}
defineProps<AboutSectionProps>()
</script>

<template>
  <div class="pt-2 flex gap-2 text-muted-foreground">
    <h2>by {{ by }}</h2>
    <h2 class="flex-1 hover:underline cursor-pointer">
      <a :href="url" target="_blank" rel="noopener noreferrer">{{ utils.getHost(url) }}</a>
    </h2>
    <h3>{{ utils.formatTime(time) }}</h3>
    <h4>{{ utils.calculateComments(kids) }}</h4>
  </div>
</template>
