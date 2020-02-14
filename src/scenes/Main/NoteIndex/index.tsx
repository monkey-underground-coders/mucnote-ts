import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import NoteList from '#/components/NoteList'
import NoteWindow from './Note'
import './index.scss'

interface NoteIndexProps extends RouteComponentProps {}

const NoteIndex = (props: NoteIndexProps) => {
  return (
    <div className="content">
      <div className="content__list">
        <NoteList />
      </div>

      <div className="content__note">
        <NoteWindow />
      </div>
    </div>
  )
}

export default NoteIndex
