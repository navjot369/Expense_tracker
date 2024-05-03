import "./../auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [name, setName] = useState("");
    const [isLogged, setLogged] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("money-user", name[0].toUpperCase() + name.substring(1,).toLowerCase());
        window.location.href = "/";
    }
    return(<div className="auth-outer-box">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
            <h3>Password</h3>
            <input type="password" required/>
            <div className="button-cont-outer">
                <button type="button" onClick={() => {window.location.href = "/"}}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
            <p className="other-login-opt">Don't have account? <Link to="/auth/register">Sign up</Link></p>
        </form>
    </div>);
}