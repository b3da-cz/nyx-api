import { ContentRawDice } from './ContentRawDice';
import { ContentRawPoll } from './ContentRawPoll';
import { UserActivity } from './UserActivity';
export declare type Post = {
    id: string;
    activity?: UserActivity;
    discussion_id: string;
    can_be_deleted: boolean;
    can_be_rated: boolean;
    can_be_reminded: boolean;
    content: string;
    content_raw?: ContentRawDice | ContentRawPoll | any;
    discussion_name?: string;
    post_type?: 'advertisement' | 'dice' | 'poll' | 'text';
    replies?: number[];
    inserted_at: string;
    username: string;
};
