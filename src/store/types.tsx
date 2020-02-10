export interface Action {
  type: string
}

export interface StoreRootState {
  note: NoteState
}
export interface Action {
  type: string
}

export interface NoteState {
  editMode: boolean
  categories: NotesCategorized,
  options: CategoryOptions
}

export type PrimaryKey = number;

export interface Note {
  id: PrimaryKey;
  content: string;
  title: string;
}

export interface Category {
  id: PrimaryKey;
  title: string;
  description: string;
}

export type NotesCategorized = Record<PrimaryKey, Note[]>
export type CategoryOptions = Record<PrimaryKey, Category>
