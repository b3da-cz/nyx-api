import { DiscussionTypeEnum } from './DiscussionEnums';
import { UserActivity } from './UserActivity';
import { UserSearch } from './UserSearch';
export declare type SearchExpression = string;
export declare type UnifiedSearchRowDiscussion = {
    id: number;
    discussion_type: DiscussionTypeEnum;
    discussion_name: string;
    discussion_name_highlighted: string;
    summary?: string | null;
    summary_highlighted?: string | null;
};
export declare type UnifiedSearchRowPost = {
    discussion_id: number;
    post_id: number;
    discussion_name: string;
    discussion_name_highlighted: string;
    content: string;
};
export declare type UsernameSearchResultRow = {
    user: UserSearch;
    activity?: UserActivity;
};
