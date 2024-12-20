import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 py-8 px-10">
        <h2 className="align-center text-3xl justify-center mx-24 mb-2">
          Log In
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5  rounded-full mt-5 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5  rounded-full mt-5 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-7 text-white border-none outline-none text-xl py-3 px-5  rounded-full w-full bg-emerald-600">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
