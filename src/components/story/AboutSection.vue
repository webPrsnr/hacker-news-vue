<script setup lang="ts">
import { toRefs } from 'vue'
import utils from './utils'
import type { StoryResponse } from '@/index'

interface AboutSectionProps extends Pick<StoryResponse, 'by' | 'time' | 'url'> {
  comments: number
}

interface AboutConfig {
  section: keyof AboutSectionProps
  content: string
}

const props = defineProps<AboutSectionProps>()
const { by, comments, time, url } = toRefs(props)

const aboutConfigList: AboutConfig[] = [
  { section: 'by', content: `by ${by.value}` },
  { section: 'url', content: utils.getHost(url.value) },
  { section: 'time', content: utils.formatTime(time.value) },
  { section: 'comments', content: `${comments.value} comments` },
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
