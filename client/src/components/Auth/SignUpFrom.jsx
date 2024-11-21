export function SignUpFrom() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-sm mx-auto p-6 bg-[#faf9f9] shadow-lg rounded-lg">
        <div className="space-y-6">
          <h1 className="text-xl font-semibold text-center">Sign up</h1>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                id="name"
                placeholder="Full name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                id="username"
                placeholder="Username"
              />
            </div>
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
              Sign up
            </button>
          </form>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <a className="text-black underline hover:text-black/80" href="#">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
