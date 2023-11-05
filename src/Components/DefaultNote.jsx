import React from "react";
import image from "../assests/image-removebg-preview 1.png";
import styles from "./DefaultNote.module.css";

const DefaultNote = () => {
  return (
    <div className={styles.defaultNote}>
      <div className={styles.image}>
        <img src={image} alt=""></img>
      </div>
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.</p>
      <p> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
  );
};

export default DefaultNote;
