export declare type AttendanceType = 'going' | 'interested' | 'none';
export declare type AttendanceTypeEnum = AttendanceType;
export declare type EventAttendee = {
    discussion_id: number;
    username: string;
    attendance_type: AttendanceType;
    is_friend: boolean;
};
