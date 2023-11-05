import React, { useState } from "react";
import Avatar from "react-avatar";
import { TbArrowLeft } from "react-icons/tb";
import styles from "./NoteSection.module.css";
import Notes from "./Notes";
import Input from "./Input";

const NoteSection = ({ selectedGroup, setSelectedGroup, isMobile }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes"))
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );

  return (
    <div className={styles.noteSection}>
      <div className={styles.nav}>
        {isMobile && (
          <button
            className={styles.backbutton}
            onClick={() => {
              setSelectedGroup(null);
            }}
          >
            <TbArrowLeft />
          </button>
        )}
        <Avatar
          name={selectedGroup.name}
          size={40}
          round={true}
          color={selectedGroup.color}
          className={styles.avatar}
        />
        {selectedGroup.name}
      </div>
      <div className={styles.notes}>
        <Notes notes={notes} selectedGroup={selectedGroup} />
      </div>
      <div className={styles.inputContainer}>
        <Input
          notes={notes}
          setNotes={setNotes}
          selectedGroup={selectedGroup}
        />
      </div>
    </div>
  );
};

export default NoteSection;
