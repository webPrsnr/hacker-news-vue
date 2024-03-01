import { ref, shallowRef, watch } from 'vue'
import { useLoader } from './useLoader'
import api from '@/services/api'

export function useLoadComments(kids: number[] | undefined) {
  const comments = shallowRef<any>([])

  const { isLoading, startLoading, stopLoading } = useLoader()

  const flagRefresh = ref(false)

  watch(flagRefresh, async () => {
    try {
      startLoading()
      if (kids === undefined) {
        await new Promise(resolve => setTimeout(() => {
          comments.value = []
          resolve(0)
        }, 1000))
      }
      else { comments.value = await loadComments(kids) }
    }
    catch (error) {
      stopLoading()
      console.error(error)
    }
    finally {
      stopLoading()
    }
  }, { immediate: true })

  async function loadComments(arr: number[]) {
    return Promise.all(arr!.map(async el => await fetchData(el)))
  }

  async function fetchData(id: number): Promise<any> {
    const data = await api.comments.comment(id)
    let fetchArray
    if (data.kids) {
      fetchArray = await Promise.all(data.kids.map(async (el: number) => {
        const data = await fetchData(el)
        return data
      }))
    }
    return { title: data.text, children: fetchArray, by: data.by, time: data.time }
  }

  function refreshHandler() {
    flagRefresh.value = !flagRefresh.value
  }

  return { comments, isLoading, refreshHandler }
}
