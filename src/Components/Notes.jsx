import React from "react";
import styles from "./Notes.module.css";

const Notes = ({ notes, selectedGroup }) => {
  const selectedNotes = notes
    ? notes.filter((note) => note.groupId === selectedGroup.id)
    : null;

  const dateStamp = (date) => {
    const newDate = new Date(date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedTime = newDate.toLocaleString("en-IN", options);
    return formattedTime;
  };

  const timeStamp = (date) => {
    const newDate = new Date(date);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedTime = newDate.toLocaleString("en-IN", options);
    return formattedTime;
  };

  return (
    <div className={styles.notes}>
      <ul>
        {selectedNotes &&
          selectedNotes.map((note, index) => (
            <li key={index} className={styles.list}>
              <div className={styles.stamp}>
                <div className={styles.timeStamp}>{timeStamp(note.date)}</div>
                <div>{dateStamp(note.date)}</div>
              </div>
              <div className={styles.text}>{note.text}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Notes;
