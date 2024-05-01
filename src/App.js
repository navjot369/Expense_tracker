import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    if(localStorage.getItem("money") === null) {
      localStorage.setItem("money",JSON.stringify({total: 0, debit: 0, credit: 0, entries: [], tags: []}));
    }
  }, []);
  const handleReset = () => {
    localStorage.setItem("money",JSON.stringify({total: 0, debit: 0, credit: 0, entries: [], tags: []}));
    window.location = "/";
  };

  return (<div id="most-outer-container">
    <div id="dashboard-container">
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
        <NavLink to="/team">Team</NavLink>
        <p onClick={handleReset}>Reset</p>
      </div>
    </div>

    <div className="outlet-cont"><Outlet/ ></div>
  </div>
  );
}

export default App;
