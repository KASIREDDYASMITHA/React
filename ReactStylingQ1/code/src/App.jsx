import { useState } from "react";


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
