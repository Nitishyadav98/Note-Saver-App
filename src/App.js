import "./App.css";
import Sidebar from "./Components/Sidebar";
import NoteSection from "./Components/NoteSection";
import { useEffect, useState } from "react";
import DesktopView from "./DesktopView";

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1065);
      console.log(window.innerWidth <= 1065);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  });

  return (
    <div className="App">
      {!isMobile && (
        <DesktopView
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
        />
      )}
      {isMobile &&
        (selectedGroup ? (
          <NoteSection
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            isMobile={isMobile}
          />
        ) : (
          <Sidebar setSelectedGroup={setSelectedGroup} />
        ))}
    </div>
  );
}

export default App;
