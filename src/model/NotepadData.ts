import { Context } from './Context'
import { NotepadEntry } from './NotepadEntry'
import { NotepadEntryMinimal } from './NotepadEntryMinimal'

export type NotepadData = {
  context: Context
  selected_entry?: NotepadEntry | null
  entries: NotepadEntryMinimal[]
}
