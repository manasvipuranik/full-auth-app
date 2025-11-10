import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Signup request
      await api.post("/auth/signup", { name, email, password });

      // Step 2: Auto-login right after signup
      const loginRes = await api.post("/auth/login", { email, password });

      login({
        ...loginRes.data.user,
        token: loginRes.data.token,
      });

      // Step 3: Toast message for success
      toast.success("🎉 Account created successfully! Welcome to Crochet Creations 💙", {
        position: "top-center",
        autoClose: 2500,
      });

      // Step 4: Redirect after short delay
      setTimeout(() => {
        navigate("/home");
      }, 2500);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="auth-page">
      <ToastContainer />
      <div className="auth-container">
        <h1>Create Account</h1>
        <p>Join Crochet Creations — your home for handcrafted art 🧶</p>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/" className="link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
