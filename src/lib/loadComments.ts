import api from '@/services/api'

export async function loadComments(arr: number[] | undefined) {
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
