export type AttendanceType = 'going' | 'interested' | 'none'
export type AttendanceTypeEnum = AttendanceType

export type EventAttendee = {
  discussion_id: number
  username: string
  attendance_type: AttendanceType
  is_friend: boolean
}
