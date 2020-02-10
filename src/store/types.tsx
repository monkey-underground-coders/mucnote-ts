export interface StoreRootState {
  note: NoteState,
  save: NoteState
}

export interface NoteState {
  editMode: boolean
  iText: string
  iHTML: string
}
