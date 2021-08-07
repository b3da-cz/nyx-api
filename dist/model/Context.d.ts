import { UserActivity } from './UserActivity';
export declare type Context = {
    user?: {
        mail_unread: number;
        notifications_unread: number;
        mail_last_from: string;
        notifications_last_visit: string;
        username: string;
    };
    active_friends?: UserActivity[];
};
