import React from "react";
import styles from "./DesktopView.module.css";
import Sidebar from "./Components/Sidebar";
import NoteSection from "./Components/NoteSection";
import DefaultNote from "./Components/DefaultNote";

const DesktopView = ({ setSelectedGroup, selectedGroup }) => {
  return (
    <div className={styles.desktopView}>
      <Sidebar setSelectedGroup={setSelectedGroup} />
      {selectedGroup ? (
        <NoteSection selectedGroup={selectedGroup} />
      ) : (
        <DefaultNote />
      )}
    </div>
  );
};

export default DesktopView;
