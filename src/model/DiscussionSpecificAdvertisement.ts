import { Advertisement } from './Advertisement'
import { AdvertisementSummary } from './AdvertisementSummary'
import { DomainCategoryParameterWithSelectedValue } from './DomainCategoryParameter'
import { UploadedFile } from './UploadedFile'
import { UsersReferencesCounts } from './UsersReferencesCounts'

export type DiscussionSpecificAdvertisement = {
  advertisement: Advertisement
  attachments?: UploadedFile[]
  references?: UsersReferencesCounts
  other_ads?: AdvertisementSummary[]
  current_parameter_values?: DomainCategoryParameterWithSelectedValue[]
}
