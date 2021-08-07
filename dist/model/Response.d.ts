import { Bookmark, BookmarkCategory, Context, Discussion, DiscussionDetail, Domain, MailConversation, MailPost, Notification, Post, Reminder, UploadedFile, User } from './';
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
    ignored_discussions: any[];
    ignored_domains: Domain[];
} & ErrorResponse;
export declare type MailResponse = {
    context: Context;
    conversations: MailConversation[];
    posts: MailPost[];
    reminders: Reminder[];
    waiting_files: UploadedFile[];
} & ErrorResponse;
export declare type NotificationsResponse = {
    context: Context;
    notifications: Notification[];
} & ErrorResponse;
export declare type RatingsResponse = Post[] & ErrorResponse;
export declare type RemindersResponse = {
    context: Context;
    posts: Array<Post | MailPost>;
} & ErrorResponse;
export declare type OnPostUpdatedResponse = Post & ErrorResponse;
export declare type SearchUserResponse = {
    exact: User[];
    friends: User[];
    others: User[];
} & ErrorResponse;
export declare type SearchUnifiedResponse = {
    discussion: {
        advertisements: Post[];
        discussions: DiscussionDetail[];
        events: any[];
    };
    user: {
        exact: User[];
        friends: User[];
        others: User[];
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
};
