import { shallowRef, watchEffect } from 'vue'
import type { StoryResponse } from '..'
import { useLoader } from './useLoader'
import api from '@/services/api'

const ITEMS_PER_PAGE = 15

export function useLoadStories() {
  const { isLoading, startLoading, stopLoading } = useLoader()

  const storiesList = shallowRef<StoryResponse[]>([])

  const dataStories = shallowRef<number[]>([])

  watchEffect(async () => {
    storiesList.value = []
    startLoading()

    try {
      dataStories.value = await api.stories.newStories()

      await paginationHandler(1)
    }
    catch (error) {
      console.error(error)
    }
  })

  async function paginationHandler(page: number) {
    startLoading()
    const firstIndex = page === 1 ? 1 : ((page - 1) * ITEMS_PER_PAGE)
    const lastIndex = firstIndex + ITEMS_PER_PAGE + 1

    const data = dataStories.value.slice(firstIndex, lastIndex)
    Promise.all(data.map(async id => await api.stories.story(id))).then((data) => {
      storiesList.value = data
      stopLoading()
    })
  }

  return { storiesList, isLoading, paginationHandler }
}
