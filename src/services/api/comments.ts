import http from './http'

const comments = {
  async comment(id: number): Promise<CommentResponse> {
    const data = await http.get<CommentResponse>(`item/${id}.json?print=pretty`)
    return data!
  },
}

export default comments
