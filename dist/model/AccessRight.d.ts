export declare type AccessRightType = 'read' | 'write' | 'delete' | 'edit' | 'edit_rights' | 'grant_edit_rights' | 'public';
export declare type DiscussionAccessRight = {
    discussion_id: number;
    ar_read: boolean;
    ar_write: boolean;
    ar_delete: boolean;
    ar_edit: boolean;
    ar_rights: boolean;
    days_left: number;
};
export declare type DiscussionGlobalRights = {
    read: boolean;
    write: boolean;
    delete: boolean;
    edit: boolean;
    public: boolean;
};
export declare type DiscussionBookmark = {
    discussion_id: number;
    bookmark: boolean;
    category_id?: number | null;
    replies_count: number;
    last_seen_post_id: number;
    last_seen_posts_count: number;
    last_seen_image_posts_count: number;
    last_seen_link_posts_count: number;
    last_visited_at: string;
};
