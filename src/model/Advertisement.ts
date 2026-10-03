import { AdvertisementCurrencyEnum, AdvertisementStateEnum, AdvertisementTypeEnum } from './AdvertisementEnums'

export type Advertisement = {
  discussion_id: number
  price: number
  currency: AdvertisementCurrencyEnum
  location: string
  shipping: string
  ad_type: AdvertisementTypeEnum
  state: AdvertisementStateEnum
  summary?: string | null
  description?: string | null
  description_raw: string
  inserted_at: string
  refreshed_at: string
  photo_ids?: string[] | null
}
