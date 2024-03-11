<script setup lang="ts">
import utils from './utils'
import type { StoryResponse } from '@/index'

interface AboutSectionProps extends Pick<StoryResponse, 'by' | 'time' | 'url'> {
  kids?: number[]
}

interface AboutConfig {
  section: keyof AboutSectionProps
  content: string
}

const props = defineProps<AboutSectionProps>()

const aboutConfigList: AboutConfig[] = [
  { section: 'by', content: `by ${props.by}` },
  { section: 'url', content: utils.getHost(props.url) },
  { section: 'time', content: utils.formatTime(props.time) },
  { section: 'kids', content: utils.calculateComments(props.kids) },
]

function isUrl(section: AboutConfig['section']) {
  return section === 'url' ? 'flex-1 hover:underline cursor-pointer' : ''
}
</script>

<template>
  <div class="pt-2 flex gap-2 text-muted-foreground">
    <h4 v-for="item in aboutConfigList" :key="item.section" :class="isUrl(item.section)">
      <a v-if="item.section === 'url'" :href="url" target="_blank" rel="noopener noreferrer">{{ item.content }}</a>
      <template v-else>
        {{ item.content }}
      </template>
    </h4>
  </div>
</template>
