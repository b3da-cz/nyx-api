import { ContentRawDice } from './ContentRawDice';
import { ContentRawPoll } from './ContentRawPoll';
export declare type ContentFormat = 'text' | 'html' | 'markdown';
export declare type ContentFormatEnum = 'text' | 'html';
export declare type PostContentText = {
    data: string;
    format?: ContentFormat;
};
export declare type PostContentEnum = PostContentText | ContentRawPoll | ContentRawDice;
