import {
  Bookmark,
  BookmarkCategory,
  Context,
  Discussion,
  DiscussionDetail,
  Domain,
  MailConversation,
  MailPost,
  Notification,
  Post,
  Rating,
  Reminder,
  UploadedFile,
  User,
} from './'

export type Response = {
  bookmarks?: Bookmark[]
  code?: string
  context?: Context
  confirmation_code?: string
  discussions?: Array<Bookmark | DiscussionDetail>
  error?: string
  posts?: Array<Post | MailPost>
  reminder_count?: number
  token?: string
}

export type ErrorResponse = {
  code: string
  error: string
  message: string
}

export type BookmarksResponse = {
  context: Context
  bookmarks: Array<{
    bookmarks: Bookmark[]
    category: BookmarkCategory
  }>
  reminder_count: number
} & ErrorResponse

export type DiscussionRepliesResponse = Post[]

export type DiscussionResponse = Discussion & DiscussionRepliesResponse & ErrorResponse

export type DiscussionStatsResponse = {
  visits: any[]
} & ErrorResponse

export type HistoryResponse = {
  context: Context
  discussions: Bookmark[]
  show_load_more: boolean
} & ErrorResponse

export type LastDiscussionsResponse = {
  context: Context
  discussions: DiscussionDetail[]
} & ErrorResponse

export type LastPostsResponse = {
  context: Context
  posts: Post[]
  ignored_discussions: any[] // todo type, Bookmark?
  ignored_domains: Domain[]
} & ErrorResponse

export type MailResponse = {
  context: Context
  conversations: MailConversation[]
  posts: MailPost[]
  reminders: Reminder[]
  waiting_files: UploadedFile[]
} & ErrorResponse

export type NotificationsResponse = {
  context: Context
  notifications: Notification[]
} & ErrorResponse

export type RatingsResponse = Rating[] & ErrorResponse

export type RemindersResponse = {
  context: Context
  posts: Array<Post | MailPost>
} & ErrorResponse

export type OnPostUpdatedResponse = Post & ErrorResponse // on rating, poll vote, roll dice

export type SearchUserResponse = {
  exact: User[]
  friends: User[]
  others: User[]
} & ErrorResponse

export type SearchUnifiedResponse = {
  discussion: {
    advertisements: Post[]
    discussions: DiscussionDetail[]
    events: any[]
  }
  user: {
    exact: User[]
    friends: User[]
    others: User[]
  }
} & ErrorResponse

export type SearchTextResponse = {
  context: Context
  posts: Post[]
} & ErrorResponse

export type SearchResponse = SearchUserResponse & SearchUnifiedResponse & SearchTextResponse

export type UploadFileResponse = UploadedFile & ErrorResponse

export type WaitingFilesResponse = {
  waiting_files: UploadedFile[]
} & ErrorResponse
