import { type ShallowRef, ref, shallowRef, watch, watchEffect } from 'vue'
import type { StoryResponse } from '..'

const ITEMS_PER_PAGE = 15

export function usePaginate(storiesRaw: ShallowRef<StoryResponse[]>) {
  const rawData = shallowRef<StoryResponse[]>([])
  const currentPage = ref(1)

  watchEffect(() => {
    getPageSlice(1)
  })

  function getPageSlice(page: number) {
    rawData.value = []
    const firstIndex = page === 1 ? 1 : ((page - 1) * ITEMS_PER_PAGE)
    const lastIndex = firstIndex + ITEMS_PER_PAGE + 1

    const data = storiesRaw.value.slice(firstIndex, lastIndex)

    rawData.value = data
    currentPage.value = page
  }

  return { getPageSlice, rawData, currentPage }
}
