import { useState } from "react";
import ComponentA from "./ComponentA.jsx";
import ComponentB from "./ComponentB.jsx";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      <br /><br />

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;

