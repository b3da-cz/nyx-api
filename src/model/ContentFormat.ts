import { ContentRawDice } from './ContentRawDice'
import { ContentRawPoll } from './ContentRawPoll'

export type ContentFormat = 'text' | 'html' | 'markdown'

export type ContentFormatEnum = 'text' | 'html'

export type PostContentText = {
  data: string
  format?: ContentFormat
}

export type PostContentEnum = PostContentText | ContentRawPoll | ContentRawDice
