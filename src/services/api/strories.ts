import http from './http'
import type { StoryResponse } from '@/index'

const stories = {
  async newStories(): Promise<number[]> {
    const data = await http.get<number[]>('newstories.json?print=pretty&orderBy=%22$priority%22&limitToFirst=100')
    return data ?? []
  },
  async story(id: number): Promise<StoryResponse> {
    const data = await http.get<StoryResponse>(`/item/${id}.json?print=pretty`)
    return data!
  },
}

export default stories
