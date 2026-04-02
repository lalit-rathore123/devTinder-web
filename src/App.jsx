import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
