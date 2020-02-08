import React from 'react'
import { connect } from 'react-redux'
import { changeEditMode } from '#/store/actions/note'
import './index.scss'

/**
 * I don't know any reason why this one doesn't work with ES6 import style,
 * maybe it's caused by inappropriate versions of module and typings for the module.
 */
const Remarkable = require('remarkable').Remarkable

interface NoteProps {
  changeEditMode: () => void
}

const Note = (props: NoteProps) => {
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

export default connect(null, { changeEditMode })(Note)
