import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import NoteList from '#/components/NoteList'
import NoteWindow from './Note'
import AnimatedPageTransition from '#/components/AnimatedPageTransition'
import './index.scss'

interface NoteIndexProps extends RouteComponentProps {}

const NoteIndex = (props: NoteIndexProps) => {
  return (
    <AnimatedPageTransition>
      <div className="content">
        <div className="content__list">
          <NoteList />
        </div>

        <div className="content__note">
          <NoteWindow />
        </div>
      </div>
    </AnimatedPageTransition>
  )
}

export default NoteIndex
