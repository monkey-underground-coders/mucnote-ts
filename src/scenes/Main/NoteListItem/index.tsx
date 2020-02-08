import React from 'react'
import { getShortString } from '#/utils'
import './index.scss'

interface NoteListItemProps {
  data: {
    title: string
  }
}

const NoteListItem = (props: NoteListItemProps) => {
  return (
    <div className="note-list__item">
      <div className="note-list__item-title">{props.data.title}</div>
      <div className="note-list__item-description">
        {getShortString(
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eveniet dolorum ab exercitationem hic quoasdadadaxzloremsmdap'
        )}
      </div>
    </div>
  )
}

export default NoteListItem
