import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/ViewPostPage";
import { LoginFrom } from "@/components/Auth/LoginForm";
import { SignUpFrom } from "@/components/Auth/SignUpFrom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/View/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginFrom />} />
        <Route path="/signup" element={<SignUpFrom />} />
      </Routes>
    </>
  );
}

export default App;
