import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/ViewPostPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/View/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
