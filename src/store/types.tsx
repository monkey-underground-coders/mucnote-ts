export interface Action {
  type: string
}

export interface StoreRootState {
  note: NoteState
}

export interface NoteState {
  editMode: boolean
}
