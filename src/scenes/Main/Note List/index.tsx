import React from "react";
import "./index.scss";
interface NoteListProps {}

const NoteList = (props: NoteListProps) => {
  return (
    <div className="notelist">
      <div>Note 1</div>
      <div>Note 2</div>
      <div>Note 3</div>
      <div>Note 4</div>
      <div>Note 5</div>
      <div>Note 6</div>
      <div>Note 7</div>
    </div>
  );
};

export default NoteList;
