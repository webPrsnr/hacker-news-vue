import { type ShallowRef, ref, shallowRef, watchEffect } from 'vue'
import type { StoryResponse } from '..'

export function usePaginate(storiesRaw: ShallowRef<StoryResponse[]>) {
  const storiesOnPage = shallowRef<StoryResponse[]>([])
  const currentPage = ref(1)

  watchEffect(() => {
    getPageSlice(1)
  })

  function getPageSlice(page: number) {
    storiesOnPage.value = []

    const stories = getSlicedStories(storiesRaw.value, page)

    storiesOnPage.value = stories
    currentPage.value = page
  }

  return { getPageSlice, storiesOnPage, currentPage }
}

const ITEMS_PER_PAGE = 15
export function getSlicedStories(stories: StoryResponse[], neededPage: number) {
  const firstIndex = neededPage === 1 ? neededPage : ((neededPage - 1) * ITEMS_PER_PAGE)
  const lastindex = firstIndex + ITEMS_PER_PAGE + 1

  const data = stories.slice(firstIndex, lastindex)

  return data
}
