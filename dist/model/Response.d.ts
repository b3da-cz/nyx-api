import { Bookmark, BookmarkCategory, Context, Discussion, DiscussionAccessRight, DiscussionDetail, DiscussionGlobalRights, Domain, EventArea, EventCalendarDay, EventCategory, EventListItem, LastIgnoredDiscussionsWithName, MailConversation, MailPost, NotepadData, NotepadEntry, Notification, Post, Rating, Reminder, UnifiedSearchRowDiscussion, UploadedFile, User, UsernameSearchResultRow } from './';
export declare type Response = {
    bookmarks?: Bookmark[];
    code?: string;
    context?: Context;
    confirmation_code?: string;
    discussions?: Array<Bookmark | DiscussionDetail>;
    error?: string;
    posts?: Array<Post | MailPost>;
    reminder_count?: number;
    token?: string;
};
export declare type ErrorResponse = {
    code: string;
    error: string;
    message: string;
};
export declare type EventsResponse = {
    context: Context;
    events: EventListItem[];
    calendar: Record<string, EventCalendarDay>;
    categories: EventCategory[];
    areas: EventArea[];
    default_areas: number;
} & ErrorResponse;
export declare type BookmarksResponse = {
    context: Context;
    bookmarks: Array<{
        bookmarks: Bookmark[];
        category: BookmarkCategory;
    }>;
    reminder_count: number;
} & ErrorResponse;
export declare type DiscussionRepliesResponse = Post[];
export declare type DiscussionResponse = Discussion & DiscussionRepliesResponse & ErrorResponse;
export declare type DiscussionStatsResponse = {
    visits: any[];
} & ErrorResponse;
export declare type DiscussionAccessRightResponse = (DiscussionAccessRight | DiscussionGlobalRights) & ErrorResponse;
export declare type HistoryResponse = {
    context: Context;
    discussions: Bookmark[];
    show_load_more: boolean;
} & ErrorResponse;
export declare type LastDiscussionsResponse = {
    context: Context;
    discussions: DiscussionDetail[];
} & ErrorResponse;
export declare type LastPostsResponse = {
    context: Context;
    posts: Post[];
    ignored_discussions: LastIgnoredDiscussionsWithName[];
    ignored_domains: Domain[];
} & ErrorResponse;
export declare type MailResponse = {
    context: Context;
    conversations: MailConversation[];
    posts: MailPost[];
    reminders: Reminder[];
    waiting_files: UploadedFile[];
} & ErrorResponse;
export declare type NotepadResponse = NotepadData & ErrorResponse;
export declare type NotepadEntryResponse = NotepadEntry & ErrorResponse;
export declare type NotificationsResponse = {
    context: Context;
    notifications: Notification[];
} & ErrorResponse;
export declare type RatingsResponse = Rating[] & ErrorResponse;
export declare type RemindersResponse = {
    context: Context;
    posts: Array<Post | MailPost>;
} & ErrorResponse;
export declare type OnPostUpdatedResponse = Post & ErrorResponse;
export declare type SearchUserResponse = {
    exact: User[] | UsernameSearchResultRow[];
    friends: User[] | UsernameSearchResultRow[];
    others: User[] | UsernameSearchResultRow[];
} & ErrorResponse;
export declare type SearchUnifiedResponse = {
    discussion: {
        advertisements: UnifiedSearchRowDiscussion[] | Post[];
        discussions: UnifiedSearchRowDiscussion[] | DiscussionDetail[];
        events: UnifiedSearchRowDiscussion[];
    };
    user: {
        exact: User[] | UsernameSearchResultRow[];
        friends: User[] | UsernameSearchResultRow[];
        others: User[] | UsernameSearchResultRow[];
    };
} & ErrorResponse;
export declare type SearchTextResponse = {
    context: Context;
    posts: Post[];
} & ErrorResponse;
export declare type SearchResponse = SearchUserResponse & SearchUnifiedResponse & SearchTextResponse;
export declare type UploadFileResponse = UploadedFile & ErrorResponse;
export declare type WaitingFilesResponse = {
    waiting_files: UploadedFile[];
} & ErrorResponse;
