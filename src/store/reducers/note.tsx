import { Action } from 'redux'
import { ActionTypes } from '../actions'
import { NoteState } from '../types'

const initialState: NoteState = {
  editMode: false,
  innerText: "",
  innerHTML: ""
}

export const noteReducer = (state: NoteState, action: Action) => ({
  [ActionTypes.NOTE.CHANGE_EDIT_MODE]: (state: NoteState, action: any) => ({
    ...state,
    editMode: !state.editMode
  }),
  [ActionTypes.NOTE.SAVE_NOTE_TEXT]: (state: NoteState, action: any) => ({
    ...state,
    iText: action.payload.noteContent.innerText,
    iHTML: action.payload.noteContent.innerHTML
  }),
  initialState
})
