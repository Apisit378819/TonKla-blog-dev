import { NavBar } from "../NavBar";
export function LoginFrom() {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-sm mx-auto p-6 bg-[#faf9f9] shadow-lg rounded-lg">
        <div className="space-y-6">
          <h1 className="text-xl font-semibold text-center">Login</h1>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className="w-full px-4 py-2 mt-2 text-sm text-white bg-black rounded-md hover:bg-black/90"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <a className="text-black underline hover:text-black/80" href="#">
            Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
