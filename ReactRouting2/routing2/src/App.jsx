import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodosDetails from "./pages/TodosDetails";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todos"
          element={
            <ProtectedRouter>
              <Todos />
            </ProtectedRouter>
          }
        />
        <Route
          path="/todos/:todoId"
          element={
            <ProtectedRouter>
              <TodosDetails />
            </ProtectedRouter>
          }
        />
      </Routes>
    </div>
  );
}

export default App;