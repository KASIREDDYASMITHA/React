import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "200px",
          padding: "20px",
          margin: "20px auto",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
        }}
      >
        Color Toggle Box
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}

export default App;

