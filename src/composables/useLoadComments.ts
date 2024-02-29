import { shallowRef, toValue, watchEffect } from 'vue'
import { useLoader } from './useLoader'
import api from '@/services/api'

export function useLoadComments(kids: number[] | undefined) {
  const comments = shallowRef<any>([])
  const { isLoading, startLoading, stopLoading } = useLoader()

  if (kids === undefined)
    return { comments: false }

  watchEffect(async () => {
    try {
      startLoading()
      comments.value = await loadComments(kids)
    }
    catch (error) {
      stopLoading()
      console.error(error)
    }
    finally {
      stopLoading()
    //   console.log(comments.value)
    }
  })

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

  return { comments, isLoading }
}
