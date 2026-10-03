export declare type DateRange = {
    start: string;
    end: string;
};
export declare type Event = {
    discussion_id: number;
    location: string;
    area_id: number;
    duration: DateRange;
    summary?: string | null;
    description?: string | null;
    description_raw: string;
    photo_ids?: string[] | null;
    thumbnail_id?: string | null;
    going_people: number;
    interested_people: number;
    updated_at: string;
};
