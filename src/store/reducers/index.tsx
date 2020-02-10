import { Action, combineReducers } from 'redux'
import { StoreRootState } from '../types'
import { noteReducer } from './note'

export const rootLevelReducer = (state: StoreRootState, action: Action) => {
  const topLevelReducer = combineReducers({
    note: noteReducer,
  })

  return topLevelReducer(state as any, action as any)
}
