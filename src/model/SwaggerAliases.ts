import { Bookmark } from './Bookmark'
import { BookmarkCategory } from './BookmarkCategory'
import { ContentRawDice } from './ContentRawDice'
import { ContentRawPoll } from './ContentRawPoll'
import { Discussion } from './Discussion'
import { Domain } from './Domain'
import { MailConversation } from './MailConversation'
import { Notification } from './Notification'
import { Post } from './Post'
import { Rating } from './Rating'
import { BookmarksResponse, ErrorResponse, Response, SearchTextResponse, SearchUnifiedResponse } from './Response'
import { UploadedFile } from './UploadedFile'
import { UserActivity } from './UserActivity'
import { UserSearch } from './UserSearch'

export type Activity = UserActivity
export type Username = string
export type BookmarkedDiscussion = Bookmark
export type BookmarksData = BookmarksResponse
export type BookmarkDataGroup = {
  bookmarks: Bookmark[]
  category: BookmarkCategory
}
export type DiscussionBookmarkCategory = BookmarkCategory
export type DiscussionCommon = Discussion['discussion_common']
export type DiscussionPostTagWithName = Rating
export type DiscussionPostWithName = Post
export type DiscussionPostWithNameAndDiscussionName = Post
export type TemplatePost = Post
export type FileWithUrl = UploadedFile
export type JsonError = ErrorResponse
export type JsonOk = Response
export type LastIgnoredDomainsWithName = Domain
export type MailConversationWithActivity = MailConversation
export type NotificationDetails = Notification['details']
export type NotificationThumbUp = {
  username: string
  inserted_at: string
}
export type PostContentDice = ContentRawDice
export type PostContentDiceRoll = {
  user: UserSearch
  rolls: number[]
}
export type PostContentPoll = ContentRawPoll
export type PostContentPollAnswer = {
  answer: string
  result?: {
    respondents?: string
  }
}
export type PostContentPollComputedValues = {
  can_modify: boolean
  user_did_vote: boolean
  total_votes: number
  total_respondents: number
  maximum_answer_votes: number
}
export type UnifiedSearchDiscussionResult = SearchUnifiedResponse
export type UnifiedSearchDiscussionPostResult = SearchTextResponse
