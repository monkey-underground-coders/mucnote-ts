import React from 'react'
import NoteListItem from '../NoteListItem'
import { connect } from 'react-redux'
import { StoreRootState, NotesCategorized, Note } from '#/store/types'
import { Category } from '#/store/types'
import { createNote } from '#/store/actions/note'
import _ from 'lodash'
import './index.scss'

interface NoteListProps {
  selectedCategory: Category | null
  categories: NotesCategorized
}

const NoteList = (props: NoteListProps) => {
  const { categories, selectedCategory } = props

  const notesContainer = React.useMemo(() => {
    if (selectedCategory) {
      return categories[selectedCategory.id]
    }
    return _.flatten(Object.values(categories))
  }, [categories, selectedCategory])

  const _renderedNotes = React.useMemo(() => notesContainer.map((note: Note) => <NoteListItem note={note} />), [
    notesContainer
  ])

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

export default connect(
  (store: StoreRootState) => ({ selectedCategory: store.note.selectedCategory, categories: store.note.categories }), {}
)(NoteList)
