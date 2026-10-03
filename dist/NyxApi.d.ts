import { Http } from './Http';
import { AccessRightType, ApiNavigationDirection, AttendanceType, Auth, BookmarksResponse, ContentFormatEnum, Context, DiscussionAccessRightResponse, DiscussionResponse, DiscussionStatsResponse, EventsResponse, HistoryResponse, LastDiscussionsResponse, LastPostsResponse, MailResponse, NotepadEntryResponse, NotepadResponse, NotificationsResponse, NyxInit, OnPostUpdatedResponse, Post, RatingsResponse, RemindersResponse, Response as NyxResponse, SearchResponse, SearchTextResponse, UploadFileResponse, WaitingFilesResponse } from './model';
export declare class NyxApi extends Http {
    constructor(data: NyxInit);
    /**
     * @throws Error
     */
    createAuthToken(username: string): Promise<Auth>;
    logout(): Promise<void>;
    deleteAuthToken(): Promise<Partial<NyxResponse>>;
    getBookmarks(includingSeen?: boolean): Promise<Partial<BookmarksResponse>>;
    getHistory(showRead?: boolean, showBooked?: boolean): Promise<Partial<HistoryResponse>>;
    getContext(): Promise<Partial<Context>>;
    getLastPosts(minRating?: number, isRatedByFriends?: boolean, isRatedByMe?: boolean): Promise<Partial<LastPostsResponse>>;
    getLastDiscussions(): Promise<Partial<LastDiscussionsResponse>>;
    search(phrase: string, isUnified?: boolean, isUsername?: boolean, limit?: number): Promise<Partial<SearchResponse>>;
    getDiscussion(id: string | number): Promise<Partial<DiscussionResponse>>;
    getDiscussionBoard(id: string | number): Promise<Partial<DiscussionResponse>>;
    getDiscussionStats(id: string | number): Promise<Partial<DiscussionStatsResponse>>;
    getMail(queryString?: string): Promise<Partial<MailResponse>>;
    getReminders(type: 'bookmarks' | 'mail'): Promise<Partial<RemindersResponse>>;
    getWaitingFiles(discussionId: string | number): Promise<Partial<WaitingFilesResponse>>;
    getNotifications(): Promise<Partial<NotificationsResponse>>;
    getRating(post: Post): Promise<Partial<RatingsResponse>>;
    ratePost(post: Post, rating: 'positive' | 'negative' | 'negative_visible' | 'remove'): Promise<Partial<OnPostUpdatedResponse>>;
    setReminder(discussionId: string | number, postId: string | number, isReminder: boolean): Promise<Partial<OnPostUpdatedResponse>>;
    reportPost(postId: string | number): Promise<Partial<NyxResponse>>;
    sendPrivateMessage(recipient: string, message: string): Promise<Partial<NyxResponse>>;
    sendTypingNotification(recipient: string): Promise<Partial<NyxResponse>>;
    bookmarkDiscussion(discussionId: string | number, isBooked: boolean, categoryId?: number): Promise<Partial<NyxResponse>>;
    rollDice(discussionId: string | number, postId: string | number): Promise<Partial<OnPostUpdatedResponse>>;
    rollDiceInHeader(discussionId: string | number, contentId: string | number): Promise<Partial<OnPostUpdatedResponse>>;
    voteInPoll(discussionId: string | number, postId: string | number, answers: string[]): Promise<Partial<OnPostUpdatedResponse>>;
    voteInHeaderPoll(discussionId: string | number, contentId: string | number, answers: string[]): Promise<Partial<OnPostUpdatedResponse>>;
    postToDiscussion(discussionId: string | number, text: string): Promise<Partial<NyxResponse>>;
    deletePost(discussionId: string | number, postId: string | number): Promise<Partial<NyxResponse>>;
    uploadFile(file: File | any, discussionId?: string | number): Promise<Partial<UploadFileResponse>>;
    deleteFile(fileId: string | number): Promise<Partial<NyxResponse>>;
    subscribeForFCM(fcmToken: string, appIdentifier: string): Promise<Partial<NyxResponse>>;
    unregisterFromFCM(fcmToken: string, appIdentifier: string): Promise<Partial<NyxResponse>>;
    getNotepad(): Promise<Partial<NotepadResponse>>;
    getNotepadEntry(entryId: string | number): Promise<Partial<NotepadEntryResponse>>;
    removeBookmarksFromHistory(discussionIds: number[]): Promise<Partial<NyxResponse>>;
    markBookmarksHistoryAsRead(discussionIds: number[]): Promise<Partial<NyxResponse>>;
    addDiscussionRights(discussionId: string | number, username: string): Promise<Partial<NyxResponse>>;
    deleteDiscussionRights(discussionId: string | number, username: string): Promise<Partial<NyxResponse>>;
    setDiscussionRight(discussionId: string | number, right: AccessRightType, set: boolean, username?: string): Promise<Partial<DiscussionAccessRightResponse>>;
    saveDiscussionContent(discussionId: string | number, contentId: string | number, content: string, format?: ContentFormatEnum): Promise<Partial<NyxResponse>>;
    setFileEmbed(fileId: string | number, isEmbed: boolean): Promise<Partial<NyxResponse>>;
    searchV2(params: {
        user?: string;
        text?: string;
        order?: ApiNavigationDirection;
        fromId?: number;
    }): Promise<Partial<SearchTextResponse>>;
    getEvents(params?: {
        area?: number;
        category?: number;
        month?: number;
        year?: number;
    }): Promise<Partial<EventsResponse>>;
    setEventAttendance(discussionId: string | number, attendance: AttendanceType): Promise<Partial<NyxResponse>>;
}
