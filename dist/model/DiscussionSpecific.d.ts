import { DiscussionSpecificAdvertisement } from './DiscussionSpecificAdvertisement';
import { AttendanceType, EventAttendee } from './EventAttendee';
import { Event } from './Event';
import { EventsArea } from './EventsArea';
import { Header } from './Header';
import { UploadedFile } from './UploadedFile';
export declare type DiscussionSpecificDiscussion = {
    header?: Header[];
};
export declare type DiscussionSpecificEvent = {
    event: Event;
    area?: EventsArea;
    attachments?: UploadedFile[];
    attendees?: EventAttendee[];
    my_attendance?: AttendanceType;
};
export declare type DiscussionSpecific = DiscussionSpecificDiscussion | DiscussionSpecificEvent | DiscussionSpecificAdvertisement;
