export type FileTypeEnum =
  | 'free_file'
  | 'mail_attachment'
  | 'mail_backup'
  | 'discussion_attachment'
  | 'discussion_backup'
  | 'market_attachment'
  | 'event_attachment'

export type FileMimeTypeEnum = 'image/gif' | 'image/jpeg' | 'image/png' | 'text/html' | 'octet/stream'

export type FileIdWithThumb = string
