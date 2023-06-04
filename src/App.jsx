import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SalaryComponent from "./pages/SalaryComponent";
import Edit from "./pages/Edit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/component" element={<SalaryComponent />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
}

export default App;
