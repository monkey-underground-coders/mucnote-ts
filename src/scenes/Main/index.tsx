import React from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import NoteList from './NoteList'
import './index.scss'

interface MainSceneProps {}

const MainScene = (props: MainSceneProps) => {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <div className="content__list">
          <NoteList />
        </div>

        <div className="content__note">
          <Note />
        </div>
      </div>
    </div>
  )
}

export default MainScene
