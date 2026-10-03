import { Bookmark } from './Bookmark';
import { BookmarkCategory } from './BookmarkCategory';
import { ContentRawDice } from './ContentRawDice';
import { ContentRawPoll } from './ContentRawPoll';
import { Discussion } from './Discussion';
import { Domain } from './Domain';
import { MailConversation } from './MailConversation';
import { Notification } from './Notification';
import { Post } from './Post';
import { Rating } from './Rating';
import { BookmarksResponse, ErrorResponse, Response, SearchTextResponse, SearchUnifiedResponse } from './Response';
import { UploadedFile } from './UploadedFile';
import { UserActivity } from './UserActivity';
import { UserSearch } from './UserSearch';
export declare type Activity = UserActivity;
export declare type Username = string;
export declare type BookmarkedDiscussion = Bookmark;
export declare type BookmarksData = BookmarksResponse;
export declare type BookmarkDataGroup = {
    bookmarks: Bookmark[];
    category: BookmarkCategory;
};
export declare type DiscussionBookmarkCategory = BookmarkCategory;
export declare type DiscussionCommon = Discussion['discussion_common'];
export declare type DiscussionPostTagWithName = Rating;
export declare type DiscussionPostWithName = Post;
export declare type DiscussionPostWithNameAndDiscussionName = Post;
export declare type TemplatePost = Post;
export declare type FileWithUrl = UploadedFile;
export declare type JsonError = ErrorResponse;
export declare type JsonOk = Response;
export declare type LastIgnoredDomainsWithName = Domain;
export declare type MailConversationWithActivity = MailConversation;
export declare type NotificationDetails = Notification['details'];
export declare type NotificationThumbUp = {
    username: string;
    inserted_at: string;
};
export declare type PostContentDice = ContentRawDice;
export declare type PostContentDiceRoll = {
    user: UserSearch;
    rolls: number[];
};
export declare type PostContentPoll = ContentRawPoll;
export declare type PostContentPollAnswer = {
    answer: string;
    result?: {
        respondents?: string;
    };
};
export declare type PostContentPollComputedValues = {
    can_modify: boolean;
    user_did_vote: boolean;
    total_votes: number;
    total_respondents: number;
    maximum_answer_votes: number;
};
export declare type UnifiedSearchDiscussionResult = SearchUnifiedResponse;
export declare type UnifiedSearchDiscussionPostResult = SearchTextResponse;
