import { Action } from '../types'
import { ActionTypes } from '../actions'
import { NoteState } from '../types'
import _ from 'lodash'
import { createReducer } from '../helpers'
const initialState: NoteState = {
  editMode: false,
  categories: [],
  options: []
}

export const noteReducer = createReducer<NoteState, Action>(
  {
    [ActionTypes.NOTE.CHANGE_EDIT_MODE]: (state: NoteState, action: any) => ({
      ...state,
      editMode: !state.editMode
    }),
    [ActionTypes.NOTE.CREATE_CATEGORY]: (state: NoteState, action: any) => ({
      ...state,
      options: { ...state.options, [action.payload.category.id]: action.payload.category },
      categories: { ...state.categories, [action.payload.category.id]: [] }
    })
  },
  initialState
)
