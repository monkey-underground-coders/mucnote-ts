import { Action } from '../types'
import { ActionTypes } from '../actions'
import { NoteState } from '../types'
import { createReducer } from '../helpers'
import _ from 'lodash'

const initialState: NoteState = {
  editMode: false,
  categories: {
    '0': [{ id: 0, innerHTML: '', innerText: '', title: 'Lorem Isprum0' }],
    '1': [{ id: 1, innerHTML: '', innerText: '', title: 'Lorem Isprum1' }],
    '2': [{ id: 2, innerHTML: '', innerText: '', title: 'Lorem Ipsum2' }]
  },
  options: {
    '0': { id: 0, title: 'Fruits', description: 'Some tasty food' },
    '1': { id: 1, title: 'Vegetables', description: 'Some tasty food' },
    '2': { id: 2, title: 'Other', description: 'Some tasty food' }
  },
  selectedCategory: null
}

export const noteReducer = createReducer<NoteState, Action>(
  {
    [ActionTypes.NOTE.CHANGE_EDIT_MODE]: (state: NoteState, action: any) => ({
      ...state,
      editMode: !state.editMode
    }),

    [ActionTypes.NOTE.SAVE_NOTE_TEXT]: (state: NoteState, action: any) => ({
      ...state,
      categories: { ...state.categories, [action.payload.note.id]: action.payload.note }
    }),

    [ActionTypes.NOTE.CREATE_CATEGORY]: (state: NoteState, action: any) => ({
      ...state,
      options: { ...state.options, [action.payload.category.id]: action.payload.category },
      categories: { ...state.categories, [action.payload.category.id]: [] }
    }),

    [ActionTypes.NOTE.SET_SELECTED_CATEGORY]: (state: NoteState, action: any) => ({
      ...state,
      selectedCategory: action.payload.selectCategory
    })
  },
  initialState
)
