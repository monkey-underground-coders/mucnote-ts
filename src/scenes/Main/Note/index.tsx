import React from 'react'
import { connect } from 'react-redux'
import { changeEditMode, saveNoteText, createCategory  } from '#/store/actions/note'
import { NoteState } from "../../../store/types"
import './index.scss'
import { Category } from '#/store/types'

/**
 * I don't know any reason why this one doesn't work with ES6 import style,
 * maybe it's caused by inappropriate versions of module and timport { Category } from './../../../store/types';
ypings for the module.import { saveNoteText } from './../../../store/actions/note';

 */
const Remarkable = require('remarkable').Remarkable

interface NoteProps {
  changeEditMode: () => void,
  createCategory: (payload: {category: Category}) => Promise<any>
  saveNoteText: (payload: { noteContent: NoteState }) => void
}

const Note = (props: NoteProps) => {
  const ref = React.useRef(null)

  const [innerText, setInnerText] = React.useState<string>('')
  const [innerHTML, setInnerHTML] = React.useState<string>('')
  const [previewMode, setPreviewMode] = React.useState<boolean>(false)

  const markdown = new Remarkable({ breaks: true })
  const click = () => {
    props.createCategory({category: {id: 1, title: "Test Category", description: "sample text"}})
  }
  const togglePreview = () => {
    const target = ref.current as any
    if (!previewMode) {
      setInnerText(target.innerText)
      setInnerHTML(target.innerHTML)
    }
    setPreviewMode(!previewMode)
  }

  React.useLayoutEffect(() => {
    const target = ref.current as any
    if (target) {
      target.innerHTML = innerHTML
    }
  }, [previewMode, innerHTML])

  const SaveNote = () => {
    props.saveNoteText({ noteContent: { editMode: previewMode, innerText: innerText, innerHTML: innerHTML } })
  }

  return (
    <div className="create__note">
      <div className="create__note__actions">
        <div className="btn btn-success">
          <span>
            <i className="fas fa-check"></i>
          </span>
          <span className="ml-1" onClick={click}>Save</span>
        </div>
        <div className="btn btn-primary ml-2" onClick={togglePreview}>
          <span>
            <i className="fas fa-eye"></i>
          </span>
          <span className="ml-1">{previewMode ? 'Close preview' : 'Watch preview'}</span>
        </div>
      </div>

      {previewMode ? (
        <div className="create__note__content" dangerouslySetInnerHTML={{ __html: markdown.render(innerText) }}></div>
      ) : (
          <div className="create__note__content" contentEditable={true} ref={ref}></div>
        )}
    </div>
  )
}

export default connect(null, { changeEditMode, createCategory, saveNoteText})(Note)
