import React from 'react'
import Remarkable from 'remarkable'
import './index.scss'
import { connect } from 'react-redux'
import { changeEditMode } from '#/store/actions/note'
interface CreateNoteModalProps {
  changeEditMode: () => void
}
const CreateNoteModal = (props: CreateNoteModalProps) => {
  const md = new Remarkable({ breaks: true })
  const onEditClick = () => {
    props.changeEditMode()
  }
  return (
    <div className="form">
      <div className="modal__form__button btn">
        <span>
          <i className="far fa-save"></i>
        </span>
        <span>Save</span>
      </div>
      <div className="modal__form__button btn" onClick={onEditClick}>
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
export default connect(null, { changeEditMode })(CreateNoteModal)
