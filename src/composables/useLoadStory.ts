import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import type { StoryResponse } from '..'
import { useLoader } from './useLoader'
import api from '@/services/api'

export function useLoadStory() {
  const route = useRoute()
  const { id } = route.params
  const { isLoading, startLoading, stopLoading } = useLoader()

  const story = ref<StoryResponse | null>(null)

  watchEffect(async () => {
    story.value = null

    try {
      startLoading()
      story.value = await api.stories.story(Number(id))
    }
    catch (error) {
      console.error(error)
    }
    finally {
      stopLoading()
    }
  })

  return {
    isLoading,
    story,
  }
}
