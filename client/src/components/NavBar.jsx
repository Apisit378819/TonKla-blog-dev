import { useNavigate } from "react-router-dom";
export function NavBar() {
  const navigate = useNavigate()
  const homepage = () => {
    navigate("/")
  }
  const loginfrom = () => {
    navigate("/login")
  }
  const signup = () => {
    navigate("/signup")
  }
    return (
      <nav className="flex items-center justify-between py-4 px-8 bg-white border-b">
        <a href="#" className="text-gray-900" onClick={homepage}>
          Tonkla Dev
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="px-9 py-2  rounded-full border" onClick={loginfrom}>
            Login
          </a>
          <a
            href=""
            className="px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors" onClick={signup}
          >
            Sign up
          </a>
        </div>
      </nav>
    );
  }