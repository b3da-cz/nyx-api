import { AttendanceType } from './EventAttendee'
import { DateRange } from './Event'

export type EventListItem = {
  discussion_id: number
  full_name: string
  summary?: string | null
  area_id: number
  location: string
  area_gettext_name: string
  duration: DateRange
  upcoming_short_event: boolean
  category_id: number
  category_path: string
  bookmark: boolean
  thumbnail_id?: string | null
  new_posts_count: number
  new_replies_count: number
  new_links_count: number
  new_images_count: number
  going_people: number
  interested_people: number
  friends: string[]
  my_attendance?: AttendanceType | null
}

export type EventCategory = {
  id: number
  domain_id: number
  parent_id: number
  sort_code: number
  name: string
}

export type EventArea = {
  id: number
  name: string
  selected: boolean
}

export type EventCalendarDay = {
  day: string
  event_count_total: number
  event_count_short: number
}
