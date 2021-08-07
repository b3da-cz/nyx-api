export type DiscussionDetail = {
  id: number
  ar_delete: boolean
  ar_edit: boolean
  ar_read: boolean
  ar_rights: boolean
  ar_write: boolean
  discussion_type: string
  domain_category_id: number
  domain_id: number
  has_backups: boolean
  has_header: boolean
  has_home: boolean
  last_header_change: string
  name_dynamic?: string
  name_static: string
  public: boolean
}
