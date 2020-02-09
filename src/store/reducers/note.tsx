import { Action } from '../types'
import { ActionTypes } from '../actions'
import { NoteState } from '../types'
import { createReducer } from '../helpers'

const initialState: NoteState = {
  editMode: false
}

export const noteReducer = createReducer<NoteState, Action>(
  {
    [ActionTypes.NOTE.CHANGE_EDIT_MODE]: (state: NoteState, action: any) => ({
      ...state,
      editMode: !state.editMode
    })
  },
  initialState
)
