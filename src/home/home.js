import './home.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Home() {
    let [obj, setObj] = useState({});
    useEffect(() => {
        setObj(JSON.parse(localStorage.getItem("money")));
    }, []);
    console.log(obj);
    return(<div id="home-outer-cont">
        <div id="home-inner-cont">
            <div id="left-outer-cont">
                <div className="hov-cont">
                    <div id="left-inner-cont" className="upper-cont">
                    <div>
                    <h3>Net worth:</h3>
                    <p id="total-worth">&#x20B9; {obj.total}</p>
                    </div>
                    <Link to="/" className="analysis-link">View Analysis</Link>
                    </div>
                    <div className="abs-cont">
                    <img id="bigger-bottom-img" src="/Images/analysis.svg" alt="back-hover"/>
                </div>
                </div>
            </div>
            <div id="right-outer-cont">
                <div id="right-top-cont">
                    <div className="hov-cont">
                        <div className="upper-cont right-upper">
                            <h2>Total Debit: </h2>
                            <h3>&#x20B9; {obj.debit}</h3>
                            <Link to="/add/debit" className="money-add">+ Debit Money</Link>
                        </div>
                        <div className="abs-cont">
                            <img src="/Images/debit-logo.svg" alt="back-hover" />
                        </div>
                    </div>
                    <div className="hov-cont">
                        <div className="upper-cont right-upper">
                            <h2>Total Credit: </h2>
                            <h3>&#x20B9; {obj.credit}</h3>
                            <Link to="/add/credit" className="money-add">- Credit Money</Link>
                        </div>
                        <div className="abs-cont">
                            <img src="/Images/credit-logo.svg" alt="back-hover" />
                        </div>
                    </div>
                </div>
                <div id="right-bottom-cont">
                <div className="hov-cont">
                        <Link to="/transactions" className="upper-cont right-lower">
                            <h2>Transactions</h2>
                        </Link>
                        <div className="abs-cont">
                            <img src="/Images/net-worth.svg" alt="back-hover" />
                            <p>&#x2197;</p>
                        </div>
                    </div>
                    <div className="hov-cont">
                        <Link to="/" className="upper-cont right-lower">
                            <h2>Search </h2>
                        </Link>
                        <div className="abs-cont">
                            <img src="/Images/search.svg" alt="back-hover" />
                            <p>&#x2197;</p>
                        </div>
                    </div>
                    <div className="hov-cont">
                        <Link to="/" className="upper-cont right-lower">
                            <h2>Team </h2>
                        </Link>
                        <div className="abs-cont">
                            <img src="/Images/team-logo.svg" alt="back-hover" />
                            <p>&#x2197;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}