import { ActionTypes } from '.'
import { ThunkDispatch } from 'redux-thunk'
import { StoreRootState } from '../types'
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
