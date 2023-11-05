import React, { useState } from "react";
import Avatar from "react-avatar";
import styles from "./Sidebar.module.css";
import Modal from "react-modal";
import { CirclePicker } from "react-color";

const Sidebar = ({ setSelectedGroup, selectedGroup }) => {
  const [noteGroups, setNoteGroups] = useState(
    JSON.parse(localStorage.getItem("noteGroups"))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState();

  const colorList = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateGroup = () => {
    handleCloseModal();
    console.log(selectedColor);
    const newGroup = {
      id: newGroupName,
      name: newGroupName,
      color: selectedColor,
    };
    setSelectedGroup(newGroup);
    if (noteGroups) {
      const newNoteGroups = [...noteGroups, newGroup];
      setNoteGroups(newNoteGroups);
      console.log("1");
      console.log(noteGroups);
      localStorage.setItem("noteGroups", JSON.stringify(newNoteGroups));
    } else {
      setNoteGroups([newGroup]);
      console.log("2");
      console.log(noteGroups);
      localStorage.setItem("noteGroups", JSON.stringify(noteGroups));
    }
    console.log(noteGroups);
    setNewGroupName("");
    setSelectedColor("");
  };

  return (
    <div className={styles.sidebar}>
      <h2>POCKET NOTES</h2>
      <button onClick={handleOpenModal} className={styles.groupbutton}>
        + Create Notes Group
      </button>
      <ul>
        {noteGroups &&
          noteGroups.map((group) => (
            <li
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className={`${styles.list} ${
                selectedGroup ? styles.selectedGroup : ""
              }`}
            >
              <Avatar
                name={group.name}
                size={50}
                round={true}
                color={group.color}
                className={styles.avatar}
              />
              {group.name}
            </li>
          ))}
      </ul>
      <div className={styles.modalcontainer}>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Create New Group Note"
          className={styles.modal}
          ariaHideApp={false}
        >
          <h2>Create New Group Note</h2>
          <div className={styles.modalinput}>
            <label>Group Name</label>
            <input
              className={styles.nameinput}
              type="text"
              placeholder="Group Name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
          </div>
          <div>
            <label>Choose Color</label>
            <CirclePicker
              color={selectedColor}
              colors={colorList}
              onChange={(color) => setSelectedColor(color.hex)}
            />
          </div>
          <button className={styles.modalbutton} onClick={handleCreateGroup}>
            Create
          </button>
          {/* <button onClick={handleCloseModal}>Cancel</button> */}
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
