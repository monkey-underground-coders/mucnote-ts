import { ActionTypes } from '.'
import { ThunkDispatch } from 'redux-thunk'
import { StoreRootState } from '../types'
import { Action } from 'redux'

export const changeEditMode = () => (dispatch: ThunkDispatch<StoreRootState, any, Action>) => {
  console.log('action')
  dispatch({ type: ActionTypes.NOTE.CHANGE_EDIT_MODE })
}
