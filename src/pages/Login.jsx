import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"; // install react-icons
import "./login.css";

export default function Login() {
  const { supabase } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else navigate("/dashboard");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-lg login-card">
        <h2 className="text-center mb-4 fw-bold">Login</h2>

        {msg && <div className="alert alert-danger">{msg}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your username"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type your password"
                required
              />
            </div>
            <div className="text-end mt-1">
              <a href="#" className="small text-muted">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-gradient w-100">
            LOGIN
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">Or Sign Up Using</p>
          <div>
            <FaFacebook className="social-icon me-3 text-primary" size={28} />
            <FaTwitter className="social-icon me-3 text-info" size={28} />
            <FaGoogle className="social-icon text-danger" size={28} />
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="small text-muted">Have not account yet?</p>
          <a href="/register" className="fw-bold">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}
