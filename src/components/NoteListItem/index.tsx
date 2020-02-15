import React from 'react'
import { getShortString } from '#/utils'
import { Note } from '#/store/types'
import './index.scss'

interface NoteListItemProps {
  note: Note
}

const NoteListItem = (props: NoteListItemProps) => {
  return (
    <div className="notelist__item">
      <div className="notelist__item__inner">
        <div className="notelist__item-title">{props.note.title}</div>
        <div className="notelist__item-description">
          {getShortString(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eveniet dolorum ab exercitationem hic quoasdadadaxzloremsmdap'
          )}
        </div>
        <div className="notelist__item-date text-muted small mt-2">30 Jan</div>
      </div>
    </div>
  )
}

export default NoteListItem
