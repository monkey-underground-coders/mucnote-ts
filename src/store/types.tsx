export interface Action {
  type: string
}

export interface StoreRootState {
  note: NoteState,
  save: NoteState
}
export interface Action {
  type: string
}

export interface NoteState {
  editMode: boolean
  categories: NotesCategorized,
  options: CategoryOptions
  selectedCategory: Category | null
}

export type PrimaryKey = number;

export interface Note {
  id: PrimaryKey;
  innerHTML: string
  innerText: string
  title: string;
}

export interface Category {
  id: PrimaryKey;
  title: string;
  description: string;
}

export type NotesCategorized = Record<PrimaryKey, Note[]>
export type CategoryOptions = Record<PrimaryKey, Category>


export interface Action {
  action: string
}
