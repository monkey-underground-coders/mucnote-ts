import React from 'react'
import NoteListItem from '../NoteListItem'
import './index.scss'

const temporaryLocalData = [...new Array(10).keys()].map(k => ({ title: `Note ${k}` }))

const NoteList = () => {
  const _renderedNotes = React.useMemo(() => temporaryLocalData.map(t => <NoteListItem data={t} />), temporaryLocalData)

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

export default NoteList
