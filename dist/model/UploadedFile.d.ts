export declare type UploadedFile = {
    id: number;
    file_type: 'discussion_attachment' | 'free_file' | 'mail_attachment';
    filename: string;
    id_specific: number;
    id_specific2?: number;
    image_avg_color_hex: string;
    image_embed: boolean;
    image_embed_option: string;
    image_height: number;
    image_width: number;
    mimetype: string;
    size: number;
    thumb_url: string;
    uploaded_at: string;
    url: string;
};
