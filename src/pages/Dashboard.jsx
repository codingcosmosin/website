import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, supabase } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-warning text-center" role="alert">
          Not logged in
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyApp</a>
          {/* Sidebar toggle for mobile */}
          <button
            className="btn btn-outline-light d-md-none me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
          >
            ☰
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-outline-light">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas Sidebar for mobile */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">Navigation</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link" href="#">Settings</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Layout */}
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Sidebar for medium+ screens */}
          <div className="col-md-2 bg-light p-3 border-end d-none d-md-block">
            <h5>Navigation</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link" href="#">Settings</a>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="col-md-10 p-4">
            <div className="card shadow p-4">
              <h2 className="card-title mb-3">Welcome, {user.email}</h2>
              <p>You are now logged in. Use the sidebar to navigate through your dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
