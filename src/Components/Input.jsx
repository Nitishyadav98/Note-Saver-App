import React from "react";
import { useState } from "react";
import vector from "../assests/Vector.png";
import styles from "./Input.module.css";

const Input = ({ notes, setNotes, selectedGroup }) => {
  const [newNote, setNewNote] = useState("");
  const handleAddNote = () => {
    const note = {
      id: Math.random(),
      date: Date(),
      text: newNote,
      groupId: selectedGroup.id,
    };
    if (notes) {
      const newNotes = [...notes, note];
      setNotes(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
    } else {
      setNotes(note);
      localStorage.setItem("notes", JSON.stringify(note));
    }
    console.log(notes);
    setNewNote("");
  };
  return (
    <div className={styles.container}>
      <textarea
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      ></textarea>
      <button className={styles.addButton} onClick={handleAddNote}>
        add
      </button>
    </div>
  );
};

export default Input;
