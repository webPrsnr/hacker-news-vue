export interface CommentResponse {
  by: string
  id: number
  parent: number
  text: string
  time: number
  type: 'comment'
}

export interface StoryResponse {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: 'story'
  url: string
}
