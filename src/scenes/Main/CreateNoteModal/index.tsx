import React from 'react'
import Remarkable from 'remarkable'

interface CreateNoteModalProps {}

const CreateNoteModal = (props: CreateNoteModalProps) => {
  const md = new Remarkable()

  return (
    <div className="form">
      <div className="modal__form">{md.render('# Remarkable rulezz!')}</div>
      <div>xyu</div>
    </div>
  )
}

export default CreateNoteModal
