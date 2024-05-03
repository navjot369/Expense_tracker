import './App.css';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if(localStorage.getItem("money") === null) {
      localStorage.setItem("money",JSON.stringify({total: 0, debit: 0, credit: 0, entries: [], tags: []}));
    }
    if(localStorage.getItem("money-user") !== null && localStorage.getItem("money-user").length > 0) {
      setUser(localStorage.getItem("money-user"));
    }
  }, []);
  const handleReset = () => {
    localStorage.setItem("money",JSON.stringify({total: 0, debit: 0, credit: 0, entries: [], tags: []}));
    window.location = "/";
  };
  const handleSignOut = () => {
    localStorage.removeItem("money-user");
    handleReset();
  }

  return (<div id="most-outer-container">
    <div id="dashboard-container">
      <div>
      <div id="dashboard-title">
      <img src="/logo.webp" alt="logo" id="main-logo"/>
      <h1>Expense Tracker</h1>
      </div>
      <div id="dashboard-links-cont">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/add/debit">Debit entry</NavLink>
        <NavLink to="/add/credit">Credit entry</NavLink>
        <p onClick={handleReset}>Reset</p>
      </div>
      </div>
      <div className="user-cont">
        {user.length > 0 &&
        <div className="sign-out-outer" onClick={handleSignOut}>
          <div className="sign-out">
            <img src="/Images/sign-out.svg" alt="sign-out"/>
          </div>
          <p className="user-name-cont">{user}</p>
        </div>
        }
      </div>
    </div>
    {user.length > 0?
    <div className="outlet-cont"><Outlet/ ></div>
    :
    <SignInTemp />
    }
  </div>
  );
}

export default App;


function SignInTemp() {
  return(<div className="sign-cont-outer">
    <div>
      <img className="wait-logo" src="/Images/wait.svg" alt="wait-logo" />
    </div>
    <div className="links-sign-cont">
      <Link to="/auth/login">Log in</Link>
      <p>or</p>
      <Link to="/auth/register">Register</Link>
      <p>to continue</p>
    </div>
  </div>);
}