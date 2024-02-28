import http from './http'
import type { CommentResponse } from '@/index'

const comments = {
  async comment(id: number): Promise<CommentResponse> {
    const data = await http.get<CommentResponse>(`item/${id}.json?print=pretty`)
    return data!
  },
}

export default comments
