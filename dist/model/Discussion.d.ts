import { DiscussionDetail } from './DiscussionDetail';
import { Header } from './Header';
import { Post } from './Post';
export declare type Discussion = {
    discussion_common: {
        advertisement_specific_data?: {
            advertisement: any;
            attachments: any[];
        };
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
        waiting_files: any[];
    };
    posts: Post[];
    presence: Array<{
        username: string;
        freshness: number;
    }>;
    items?: Header[];
};
