import { Action } from 'redux'
import { ActionTypes } from '../actions'
import { NoteState } from '../types'

const initialState: NoteState = {
  editMode: false,
  iText: "",
  iHTML: ""
}

export const noteReducer = (state: NoteState, action: Action) => ({
  [ActionTypes.NOTE.CHANGE_EDIT_MODE]: (state: NoteState, action: any) => ({
    ...state,
    editMode: !state.editMode
  }),
  initialState
})
