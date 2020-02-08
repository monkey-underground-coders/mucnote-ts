import React from 'react'
import NoteListItem from '../NoteListItem'

const temporaryLocalData = [...new Array(10).keys()].map(k => ({ title: `Note ${k}` }))

const NoteList = () => {
  const _renderedNotes = React.useMemo(() => temporaryLocalData.map(t => <NoteListItem data={t} />), temporaryLocalData)

  return (
    <>
      <div className="notelist-title">Notes</div>
      <div className="notelist">{_renderedNotes}</div>
    </>
  )
}

export default NoteList
