import "./../auth.css";
import { useState } from "react";
import  { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState("");
    const [isSuccess, setSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setInterval(() => {
            window.location.href = "/";
        }, 3000);
    }
    if(isSuccess) {
        return(<div className="user-registered">User Registered Successfully!!<p>Redirecting...</p></div>);
    }
    return(<div className="auth-outer-box">
        <h1 className="login-title">Register</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
            <h3>Password</h3>
            <input type="password" required/>
            <h3>Confirm Password</h3>
            <input type="password" required/>
            <div className="button-cont-outer">
                <button type="button" onClick={() => {window.location.href = "/"}}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
            <p className="other-login-opt">Already have account? <Link to="/auth/login">Log In</Link></p>
        </form>
    </div>);
}