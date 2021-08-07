export declare type Header = {
    id: number;
    content: string;
    content_raw: {
        type: string;
        data: {
            data: string;
            format: string;
        };
    };
    discussion_id: number;
    location: 'header' | 'home';
    post_type: string;
    sort_order: number;
};
