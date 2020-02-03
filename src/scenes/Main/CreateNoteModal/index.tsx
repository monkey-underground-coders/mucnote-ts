import React from 'react'
import Remarkable from 'remarkable'
import './index.scss'
interface CreateNoteModalProps {}

const CreateNoteModal = (props: CreateNoteModalProps) => {
  const md = new Remarkable({ breaks: true })
  const onEditClick = () => {}
  return (
    <div className="form">
      <div className="modal__form__button btn">
        <span>
          <i className="far fa-save"></i>
        </span>
        <span>Save</span>
      </div>
      <div className="modal__form__button btn">
        <span>
          <i className="far fa-edit"></i>
        </span>
        <span>Edit</span>
      </div>
      <div className="modal__form" contentEditable={true}></div>
    </div>
  )
}
// dangerouslySetInnerHTML={{ __html: md.render('# Remarkable rulezz \n suck') }}

export default CreateNoteModal
