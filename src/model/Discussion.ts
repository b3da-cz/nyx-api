import { DiscussionDetail } from './DiscussionDetail'
import { Event } from './Event'
import { AttendanceType, EventAttendee } from './EventAttendee'
import { EventsArea } from './EventsArea'
import { Header } from './Header'
import { Post } from './Post'
import { UploadedFile } from './UploadedFile'

export type Discussion = {
  discussion_common: {
    advertisement_specific_data?: {
      advertisement: any
      attachments: any[]
    }
    bookmark: {
      // can't use Bookmark here, because wtf
      bookmark: boolean
      category_id: number
      discussion_id: number
      last_seen_post_id: number
      last_visited_at: string
      replies_count: number
    }
    discussion: DiscussionDetail
    discussion_specific_data: {
      header?: Header[]
    }
    event_specific_data?: {
      event: Event
      area?: EventsArea
      attachments?: UploadedFile[]
      attendees?: EventAttendee[]
      my_attendance?: AttendanceType
    }
    waiting_files: any[]
  }
  posts: Post[]
  presence: Array<{ username: string; freshness: number }>
  items?: Header[] // board/header
}
