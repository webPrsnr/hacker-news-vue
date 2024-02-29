<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Separator from '../ui/separator/Separator.vue'
import AuthorFill from '../ui/icons/AuthorFill.vue'
import Score from './Score.vue'
import type { StoryResponse } from '@/index'

interface ArticleProps extends Pick<StoryResponse, 'by' | 'score' | 'time' | 'id'> {
}

defineProps<ArticleProps>()
</script>

<template>
  <div class="flex ">
    <Score :score="score" />
    <RouterLink :to="{ name: 'story', params: { id } }" class="contents">
      <div class="w-full items-center bg-muted py-2 px-3 flex">
        <h6 class="flex-1 text-xs lg:text-base">
          <slot />
        </h6>
      </div>
    </RouterLink>
    <div class="flex items-center gap-2 bg-muted pr-2 rounded-md rounded-tl-none rounded-bl-none">
      <span class="text-sm text-muted-foreground hidden lg:inline">{{ new Date(time * 1000).toLocaleTimeString() }}</span>
      <Separator orientation="vertical" />
      <Popover>
        <PopoverTrigger>
          <AuthorFill class="hover:text-primary h-3.5 w-3.5 lg:h-5 lg:w-5" />
        </PopoverTrigger>
        <PopoverContent class="w-70">
          <div>
            <h3 class="text-muted-foreground text-sm">
              Автор: {{ by }}
            </h3>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
