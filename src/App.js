import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProtedRoute from './Components/ProtedRoute'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
