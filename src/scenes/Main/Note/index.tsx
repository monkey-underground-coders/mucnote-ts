import React from 'react'
import './index.scss'
import { getShortString } from '#/utils'
interface NoteProps {
  title: string
}

const Note = (props: NoteProps) => {
  return (
    <div className="note">
      <div className="note-title">{props.title}</div>
      <div className="note-description">
        {getShortString(
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eveniet dolorum ab exercitationem hic quoasdadadaxzloremsmdap'
        )}
      </div>
    </div>
  )
}

export default Note
