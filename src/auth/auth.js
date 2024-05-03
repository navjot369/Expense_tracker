import "./auth.css";
import { Outlet, Link } from "react-router-dom";

export default function Auth() {
    return(<div className="auth-outer-cont">
      <Link to="/" id="login-title-main">
      <img src="/logo.webp" alt="logo" id="main-logo"/>
      <h1>Expense Tracker</h1>
      </Link>
    <Outlet />
    </div>);
}