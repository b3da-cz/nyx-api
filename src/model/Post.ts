import { ContentRawDice } from './ContentRawDice'
import { ContentRawPoll } from './ContentRawPoll'
import { UserActivity } from './UserActivity'

export type Post = {
  id: string
  activity?: UserActivity
  discussion_id: string
  can_be_deleted: boolean
  can_be_rated: boolean
  can_be_reminded: boolean
  content: string
  content_raw?: ContentRawDice | ContentRawPoll | any // todo
  discussion_name?: string // on last only
  post_type?: 'advertisement' | 'dice' | 'poll' | 'text'
  replies?: number[]
  inserted_at: string
  username: string
}
