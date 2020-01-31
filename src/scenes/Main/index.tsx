import React from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import './index.scss'
interface MainSceneProps {}
const MockDataForNotes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6']
const MainScene = (props: MainSceneProps) => {
  const notesToRender = MockDataForNotes.map(p => <Note title={p} />)
  return (
    <div className="main">
      {' '}
      <Sidebar />
      <div className="content">
        <div className="notelist-title">Notes</div>
        <div className="notelist">
          {notesToRender}
          <div />
        </div>
      </div>
    </div>
  )
}

export default MainScene
