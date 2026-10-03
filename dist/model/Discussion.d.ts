import { DiscussionAccessRight } from './AccessRight';
import { DiscussionDetail } from './DiscussionDetail';
import { DiscussionSpecificAdvertisement } from './DiscussionSpecificAdvertisement';
import { Event } from './Event';
import { AttendanceType, EventAttendee } from './EventAttendee';
import { EventsArea } from './EventsArea';
import { Header } from './Header';
import { Post } from './Post';
import { UploadedFile } from './UploadedFile';
import { UserDiscussionOwner } from './UserSearch';
export declare type Discussion = {
    discussion_common: {
        access_right?: DiscussionAccessRight | null;
        advertisement_specific_data?: DiscussionSpecificAdvertisement;
        bookmark: {
            bookmark: boolean;
            category_id: number;
            discussion_id: number;
            last_seen_post_id: number;
            last_visited_at: string;
            replies_count: number;
        };
        discussion: DiscussionDetail;
        discussion_specific_data: {
            header?: Header[];
        };
        event_specific_data?: {
            event: Event;
            area?: EventsArea;
            attachments?: UploadedFile[];
            attendees?: EventAttendee[];
            my_attendance?: AttendanceType;
        };
        owner?: UserDiscussionOwner;
        waiting_files: any[];
    };
    posts: Post[];
    presence: Array<{
        username: string;
        freshness: number;
    }>;
    items?: Header[];
};
