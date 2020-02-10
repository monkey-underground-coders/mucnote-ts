import React from 'react'
import Sidebar from './Sidebar'
import NoteList from '#/components/NoteList'
import './index.scss'
import NoteWindow from './Note/index';

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
          <NoteWindow/>
        </div>
      </div>
    </div>
  )
}

export default MainScene
