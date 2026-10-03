import { AdvertisementCurrencyEnum, AdvertisementStateEnum, AdvertisementTypeEnum } from './AdvertisementEnums'

export type AdvertisementSummary = {
  discussion_id: number
  full_name: string
  owner_username: string
  parent_categories: number[]
  photo_ids?: string[] | null
  ad_type: AdvertisementTypeEnum
  price: number
  location: string
  currency: AdvertisementCurrencyEnum
  state: AdvertisementStateEnum
  summary?: string | null
  refreshed_at: string
  posts_count: number
  parameters: number[]
}
