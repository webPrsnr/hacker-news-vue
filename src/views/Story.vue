<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { shallowRef, watch } from 'vue'
import { Header } from '@/components/home'
import { Button } from '@/components/ui/button'
import ChevronLeft from '@/components/ui/icons/ChevronLeft.vue'
import { useLoadStory } from '@/composables/useLoadStory'
import LoadingDots from '@/components/ui/loading/LoadingDots.vue'
import Comments from '@/components/story/Comments.vue'
import { loadComments } from '@/lib/loadComments'

const comments = shallowRef<{
  title: any
  children: any[] | undefined
}[]>([])

const route = useRoute()
const router = useRouter()
const { id } = route.params
const { isLoading, story } = useLoadStory(id as string)

function calculateComments(comments: number[] | null) {
  if (!comments)
    return `0 comments`
  if (comments.length === 1)
    return `1 comment`
  return `${comments.length} comments`
}

function getHost(url: string) {
  return new URL(url).host
}

watch(story, async () => {
  const data = await loadComments(story.value?.kids)
  comments.value = data
})
</script>

<template>
  <section class="container">
    <Header />
    <div class="mt-7 border-2 border-primary p-1.5 lg:p-3 lg:w-4/5 mx-auto w-full">
      <div v-if="!isLoading && story" class="border-b border-primary">
        <div class="flex items-center gap-3">
          <div>
            <Button variant="outline" size="icon" @click="() => router.back()">
              <ChevronLeft class="text-primary w-4 h-4" />
            </Button>
          </div>
          <h1 class="scroll-mb-20 text-3xl ">
            {{ story.title }}
          </h1>
        </div>
        <div class="pt-2 flex gap-2 text-muted-foreground">
          <h2>by {{ story.by }}</h2>
          <h2 class="flex-1 hover:underline cursor-pointer">
            <a :href="story.url" target="_blank" rel="noopener noreferrer">{{ getHost(story.url) }}</a>
          </h2>
          <h3>{{ new Date(story.time).toLocaleTimeString() }}</h3>
          <h4>{{ calculateComments(story.kids) }}</h4>
        </div>
      </div>
      <LoadingDots v-else />
      <div class="pt-10 space-y-6">
        <template v-for="comment in comments" :key="comment.title">
          <Comments :node="comment" />
        </template>
      </div>
    </div>
  </section>
</template>
