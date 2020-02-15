import { ActionTypes } from '.'
import { ThunkDispatch } from 'redux-thunk'
import { StoreRootState, NoteState, Note } from '../types'
import { Action } from 'redux'
import { Category } from './../types'

export const changeEditMode = () => (dispatch: ThunkDispatch<StoreRootState, any, Action>) => {
  dispatch({ type: ActionTypes.NOTE.CHANGE_EDIT_MODE })
}

export const createCategory = (payload: { category: Category }) => (
  dispatch: ThunkDispatch<StoreRootState, any, Action>
) => {
  console.log('category action')
  return new Promise((resolve, reject) => resolve()).then(() => {
    dispatch({ type: ActionTypes.NOTE.CREATE_CATEGORY, payload })
  })
}

export const saveNoteText = (payload: { note: Note }) => (dispatch: ThunkDispatch<StoreRootState, any, Action>) => {
  dispatch({ type: ActionTypes.NOTE.SAVE_NOTE_TEXT, payload })
}

export const setSelectedCategory = (payload: { selectCategory: Category }) => ({
  type: ActionTypes.NOTE.SET_SELECTED_CATEGORY,
  payload
})
