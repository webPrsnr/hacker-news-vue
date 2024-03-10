<script setup lang="ts">
import { useLoadStory } from '@/composables/useLoadStory'
import LoadingDots from '@/components/ui/loading/LoadingDots.vue'
import BackButton from '@/components/story/BackButton.vue'
import AboutSection from '@/components/story/AboutSection.vue'
import CommentsSection from '@/components/story/CommentsSection.vue'
import RefreshButton from '@/components/shared/RefreshButton.vue'

const { isLoading, story, comments, refreshData } = useLoadStory()
</script>

<template>
  <section class="container">
    <div class="mt-7 border-2 border-primary p-1.5 lg:p-3 lg:w-4/5 mx-auto w-full">
      <LoadingDots v-if="isLoading" />
      <div v-if="story">
        <div class="border-b border-primary">
          <div class="flex items-center gap-3">
            <BackButton />
            <h1 class="scroll-mb-20 text-3xl ">
              {{ story.title }}
            </h1>
          </div>
          <AboutSection :by="story.by" :kids="story.kids" :time="story.time" :url="story.url" />
        </div>
        <CommentsSection :comments="comments" />
      </div>
    </div>
  </section>
  <RefreshButton :is-loading="isLoading" @click="refreshData" />
</template>
