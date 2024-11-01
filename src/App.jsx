import "./App.css";
import {  Routes, Route } from "react-router-dom";
import { NavBar } from "./pages/NavBar";
import { Footer } from "./pages/Footer";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
