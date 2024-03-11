<script setup lang="ts">
import { Article } from '@/components/home'
import { useLoadStories } from '@/composables/useLoadStories'
import LoadingDots from '@/components/ui/loading/LoadingDots.vue'
import Pagination from '@/components/home/Pagination.vue'
import RefreshButton from '@/components/shared/RefreshButton.vue'
import { usePaginate } from '@/composables/usePaginate'

const { resultStories, getNewStories, isLoading } = useLoadStories()
const { getPageSlice, storiesOnPage, currentPage } = usePaginate(resultStories)

function refreshClickHandler(page: number) {
  getPageSlice(page)
}

async function refreshIt() {
  await getNewStories()
}
</script>

<template>
  <section class="container">
    <div class="mt-7 border-2 border-primary p-1.5 lg:p-3 lg:w-4/5 mx-auto w-full">
      <div class="space-y-1">
        <LoadingDots v-if="isLoading" />
        <Article v-for="{ by, id, score, time, title } in storiesOnPage" v-else :id="id" :key="id" :by="by" :score="score" :time="time">
          {{ title }}
        </Article>
      </div>
    </div>
    <Pagination v-model="currentPage" @refresh-click-handler="refreshClickHandler" />
  </section>
  <RefreshButton :is-loading="isLoading" @click="refreshIt" />
</template>
