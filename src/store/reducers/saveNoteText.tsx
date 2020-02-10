import { Action } from '../types'
import { ActionTypes } from '../actions'
import { NoteState } from '../types'
import { createReducer } from '../helpers'

const initialState: NoteState = {
  editMode: false,
  iText: "",
  iHTML: ""
}

export const saveNoteTextReducer = createReducer<NoteState, Action>(
    {
      [ActionTypes.NOTE.SAVE_NOTE_TEXT]: (state: NoteState, action: any) => ({
        ...state,
        iText: action.payload.NoteText.iText,
        iHTML: action.payload.NoteText.iHTML
      })
    },
    initialState
  )
  