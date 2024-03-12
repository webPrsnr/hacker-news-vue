import { ref, shallowRef, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import type { StoryResponse } from '..'
import { useLoader } from './useLoader'
import api from '@/services/api'

export function useLoadStory() {
  const route = useRoute()
  const { id } = route.params
  const { isLoading, startLoading, stopLoading } = useLoader()

  const story = ref<StoryResponse | null>(null)
  const comments = shallowRef<any>([])

  watchEffect(async () => {
    await loadStory()
  })

  async function loadStory() {
    try {
      story.value = null

      startLoading()
      const result = await api.stories.story(Number(id))
      const { data, totalCount } = await loadComments(result.kids || [])
      story.value = { ...result, comments: totalCount }
      comments.value = data
    }
    catch (error) {
      console.error(error)
    }
    finally {
      stopLoading()
    }
  }

  return {
    isLoading,
    comments,
    story,
    refreshData: loadStory,
  }
}

async function loadComments(arr: number[]) {
  // eslint-disable-next-line prefer-const
  let totalCount = { count: 0 }
  const data = await Promise.all(arr!.map(async el => await fetchData(el, totalCount)))

  return { data, totalCount: totalCount.count }
}

async function fetchData(id: number, count: any): Promise<any> {
  const data = await api.comments.comment(id)
  let fetchArray
  if (data.kids) {
    fetchArray = await Promise.all(data.kids.map(async (el: number) => {
      const data = await fetchData(el, count)
      return data
    }))
  }
  count.count++
  return { title: data.text, children: fetchArray, by: data.by, time: data.time }
}
