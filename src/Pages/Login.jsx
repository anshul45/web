import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    });
    const data = await response.json();
    localStorage.setItem("auth_token", data.token);
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <div>
        <img src={Logo} width={100} height={100} alt="App_Logo" />
      </div>
      <div className="flex flex-col gap-10 items-center">
        <h1 className="font-semibold text-3xl">Login Into Your Account </h1>
        <input
          className="px-1 py-1.5 w-72 rounded-lg text-black placeholder:text-black caret-black focus:outline-none"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="px-1 py-1.5 w-72 rounded-lg text-black placeholder:text-black caret-black  focus:outline-none"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border-2 w-72 rounded-lg py-1.5 border-white"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
