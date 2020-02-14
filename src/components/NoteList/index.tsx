import React from 'react'
import NoteListItem from '../NoteListItem'
import './index.scss'
import { connect } from 'react-redux'
import { StoreRootState, NoteState } from '../../store/types'
import { Category } from '#/store/types'


interface NoteListProps {
  selectedCategory: Category | null
  Notes: NoteState
}


const NoteList = (props: NoteListProps) => {
  const notesMapper = (data: any) => <NoteListItem data={data} />

  const temporaryLocalData = Object.keys({})

  const _renderedNotes = React.useMemo(() => {
    if (props.selectedCategory != null) {
      return temporaryLocalData.filter(word => word).map(notesMapper)
    }
    return temporaryLocalData.map(notesMapper)
  }, [temporaryLocalData, props.selectedCategory])

  const _renderedNoteActionsTitle = React.useMemo(() => {
    const len = _renderedNotes.length
    return len === 0 || len > 1 ? `${len} notes` : `${len} note`
  }, [_renderedNotes])

  return (
    <div className="notelist">
      <div className="notelist__header">
        <div className="notelist__header-title">Your notes</div>
        <div className="notelist__header-actions">
          <div className="text-muted small">{_renderedNoteActionsTitle}</div>
        </div>
      </div>

      <div className="notelist__items">{_renderedNotes}</div>
    </div>
  )
}

export default connect((store: StoreRootState) => ({ selectedCategory: store.note.selectedCategory, Notes: store.note.categories }), ({}))(NoteList)
