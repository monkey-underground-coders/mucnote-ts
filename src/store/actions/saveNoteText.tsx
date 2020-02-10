import { ActionTypes } from '.'
import { ThunkDispatch } from 'redux-thunk'
import { StoreRootState, NoteState } from '../types'
import { Action } from 'redux'

export const saveNoteText = (payload: {NoteText: NoteState}) => (dispatch: ThunkDispatch<StoreRootState, any, Action>) => {
  dispatch({ type: ActionTypes.NOTE.SAVE_NOTE_TEXT, payload })
}