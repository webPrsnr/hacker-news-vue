<script setup lang="ts">
import { Article, Header } from '@/components/home'
import { useLoadStories } from '@/composables/useLoadStories'
import LoadingDots from '@/components/ui/loading/LoadingDots.vue'
import Pagination from '@/components/home/Pagination.vue'

const { storiesList, isLoading, paginationHandler } = useLoadStories()
</script>

<template>
  <section class="container">
    <Header />
    <div class="mt-7 border-2 border-primary p-1.5 lg:p-3 lg:w-4/5 mx-auto w-full">
      <div class="space-y-1">
        <LoadingDots v-if="isLoading" />
        <Article v-for="story in storiesList" v-else :key="story.id" :by="story.by" :score="story.score" :time="story.time">
          {{ story.title }}
        </Article>
      </div>
    </div>
    <Pagination :pagination-handler="paginationHandler" />
  </section>
</template>
