/* eslint-disable react/jsx-no-target-blank */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import Form from "./pages/Form.jsx";
import EditForm from "./pages/EditForm.jsx";

function App() {
  return (
    <>
      <Navbar />
      <h2 className="h2 text-center my-5">My New MERN Project</h2>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/works"} element={<Works />} />
          <Route path={"/contact"} element={<Form />} />
          <Route path={"/edit/:id"} element={<EditForm />} />
        </Routes>
    </>
  );
}

export default App;
