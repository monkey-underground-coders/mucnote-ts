export interface StoreRootState {
  note: NoteState,
  save: NoteState
}

export interface NoteState {
  editMode: boolean
  innerText: string
  innerHTML: string
}

export interface Action {
  action: string
}