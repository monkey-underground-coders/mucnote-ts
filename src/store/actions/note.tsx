import { ActionTypes } from '.'

export const changeEditMode = () => {
  dispatch({ type: ActionTypes.NOTE.CHANGE_EDIT_MODE })
}
