import { ref, shallowRef, watchEffect } from 'vue'
import type { StoryResponse } from '..'
import { useLoader } from './useLoader'
import api from '@/services/api'

export function useLoadStories() {
  const { isLoading, startLoading, stopLoading } = useLoader()
  const rawStories = shallowRef<number[]>([])
  const resultStories = shallowRef<StoryResponse[]>([])

  watchEffect(async () => {
    getNewStories()
  })

  async function getNewStories() {
    try {
      startLoading()
      rawStories.value = await api.stories.newStories()

      const result = await Promise.all(rawStories.value.map(async id => await api.stories.story(id)))
      resultStories.value = result
    }
    catch (error) {
      console.error(error)
    }
    finally {
      stopLoading()
    }
  }
  return { resultStories, getNewStories, isLoading }
}
