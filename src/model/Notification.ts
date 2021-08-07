import { Post } from './Post'

export type Notification = {
  data: Post
  details: {
    replies?: Array<{
      id: number
      content: string
      discussion_id: number
      inserted_at: string
      username: string
    }>
    thumbs_up?: Array<{
      username: string
      inserted_at: string
    }>
  }
  type: string
}
