import React from "react";
import Sidebar from "./Sidebar";
import NoteList from "./Note List";
import "./index.scss";
interface MainSceneProps {}

const MainScene = (props: MainSceneProps) => {
  return (
    <div className="main">
      {" "}
      <Sidebar />
      <div className="content">
        <NoteList />
      </div>
    </div>
  );
};

export default MainScene;
