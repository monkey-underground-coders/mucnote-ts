import { ActionTypes } from '.'
import { ThunkDispatch } from 'redux-thunk'
import { StoreRootState, NoteState } from '../types'
import { Action } from 'redux'

export const changeEditMode = () => (dispatch: ThunkDispatch<StoreRootState, any, Action>) => {
  console.log('action')
  dispatch({ type: ActionTypes.NOTE.CHANGE_EDIT_MODE })
}

export const saveNoteText = (payload: { noteContent: NoteState }) => (dispatch: ThunkDispatch<StoreRootState, any, Action>) => {
  dispatch({ type: ActionTypes.NOTE.SAVE_NOTE_TEXT, payload })
}