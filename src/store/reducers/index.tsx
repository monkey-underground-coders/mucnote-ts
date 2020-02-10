import { Action, combineReducers } from 'redux'
import { StoreRootState } from '../types'
import { noteReducer} from './note'
import { saveNoteTextReducer } from "./saveNoteText"

export const rootLevelReducer = (state: StoreRootState, action: Action) => {
  const topLevelReducer = combineReducers({
    note: noteReducer,
    save: saveNoteTextReducer
  })

  return topLevelReducer(state as any, action)
}
