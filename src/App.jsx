import { useState } from 'react'
import './App.css'

function App() {
  const [follow, setFollow] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
  
    const handleToggleCursorFollowing = () => {
      setFollow(!follow);
    };
    const changePosition = (e) => {
      console.log(e);
      setPos({ x: e.x, y: e.y });
    };
    useEffect(() => {
      if (follow) window.addEventListener("mousemove", changePosition);
      return () => {
        window.removeEventListener("mousemove", changePosition);
      };
    }, [follow]);
  
    return (
      <main
        style={{
          display: "flex",
        }}
      >
        <button
          style={{
            margin: "auto",
          }}
          onClick={handleToggleCursorFollowing}
        >
          {follow ? "Dejar de seguir" : "Seguir"} cursor
        </button>
        <img
          src="test.png"
          style={{
            width: 20,
            height: 20,
            left: -10,
            top: -10,
            borderRadius: "100%",
            position: "absolute",
            pointerEvents: "visiblePainted",
            cursor: "none",
            translate: `${pos.x}px ${pos.y}px`,
          }}
        />
      </main>
    );
}

export default App
