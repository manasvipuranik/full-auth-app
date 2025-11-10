import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      login({
        ...res.data.user,
        token: res.data.token,
      });

      toast.success(`👋 Welcome back, ${res.data.user.name}!`, {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed. Try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="auth-page">
      <ToastContainer />
      <div className="auth-container">
        <h1>Welcome Back</h1>
        <p>Login to continue your crochet journey 🧶</p>

        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="link">
            Create one here
          </Link>
        </p>
      </div>
    </div>
  );
}
