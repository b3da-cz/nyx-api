import { Http } from './Http';
import { Auth, BookmarksResponse, Context, DiscussionResponse, DiscussionStatsResponse, HistoryResponse, LastDiscussionsResponse, LastPostsResponse, MailResponse, NotificationsResponse, NyxInit, OnPostUpdatedResponse, Post, RatingsResponse, RemindersResponse, Response as NyxResponse, SearchResponse, UploadFileResponse, WaitingFilesResponse } from './model';
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
}
