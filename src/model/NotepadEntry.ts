export type NotepadEntry = {
  id: number
  category_id?: number | null
  title: string
  content: string
  content_raw: string
  public: boolean
  sharing_token?: string
  inserted_at: string
  updated_at: string
}
