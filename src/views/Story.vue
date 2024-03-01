<script setup lang="ts">
import { ref } from 'vue'
import { Header } from '@/components/home'
import { useLoadStory } from '@/composables/useLoadStory'
import LoadingDots from '@/components/ui/loading/LoadingDots.vue'
import BackButton from '@/components/story/BackButton.vue'
import AboutSection from '@/components/story/AboutSection.vue'
import CommentsSection from '@/components/story/CommentsSection.vue'
import RefreshButton from '@/components/shared/RefreshButton.vue'

const { isLoading, story } = useLoadStory()

const loadingCommentsFlag = ref(true)
const refreshIt = ref<() => void>()

function loadCommentsFlagHandler(status: boolean) {
  loadingCommentsFlag.value = status
}

function refreshHandler(func: (() => void) | undefined) {
  refreshIt.value = func
}

function handleRefresh() {
  if (refreshIt.value)
    refreshIt.value()
}
</script>

<template>
  <div class="relative h-dvh overflow-y-scroll">
    <section class="container">
      <Header />
      <div class="mt-7 border-2 border-primary p-1.5 lg:p-3 lg:w-4/5 mx-auto w-full">
        <LoadingDots v-if="isLoading" />
        <div v-if="story" class="border-b border-primary">
          <div class="flex items-center gap-3">
            <BackButton />
            <h1 class="scroll-mb-20 text-3xl ">
              {{ story.title }}
            </h1>
          </div>
          <AboutSection :by="story.by" :kids="story.kids" :time="story.time" :url="story.url" />
        </div>
        <CommentsSection v-if="story" :kids="story.kids" @load-comments-flag="loadCommentsFlagHandler" @refresh-handler="refreshHandler" />
      </div>
    </section>
    <RefreshButton :is-loading="loadingCommentsFlag" @click="handleRefresh" />
  </div>
</template>
