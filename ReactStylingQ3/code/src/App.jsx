import { useState } from "react";
import TodosList from "./TodosList.jsx";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {showTodos && <TodosList />}

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>
    </div>
  );
}

export default App;
