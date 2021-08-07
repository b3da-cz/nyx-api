export type MailPost = {
  id: number
  content: string
  incoming?: boolean
  inserted_at: string
  unread: boolean
  username: string
}
