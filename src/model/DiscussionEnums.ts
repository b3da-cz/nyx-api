export type DiscussionTypeEnum = 'discussion' | 'event' | 'advertisement'

export type DiscussionContentLocationEnum = 'home' | 'header' | 'archive'

export type PostTypeEnum =
  | 'text'
  | 'poll'
  | 'dice'
  | 'log_message'
  | 'userlist'
  | 'module'
  | 'event'
  | 'advertisement'
  | 'discussion_request'
  | 'registration'
  | 'job'

export type TagTypeEnum = 'positive' | 'negative' | 'negative_visible' | 'removed' | 'reminder'

export type RatingAction = 'remove' | 'positive' | 'negative' | 'negative_visible'
