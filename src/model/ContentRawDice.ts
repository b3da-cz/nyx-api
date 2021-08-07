import { User } from './User'

export type ContentRawDice = {
  data: {
    additional_rolls: boolean
    computed_values: {
      can_modify: boolean
      user_did_roll: boolean
    }
    dice_count: number
    dice_sides: number
    reason: string
    rolls: Array<{
      rolls: number[]
      user: User
    }>
  }
  type: 'dice'
}
