import "./trans.css";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ListItem from "../lists/list.util";

export default function Transact() {
    const [obj, setObj] = useState([]);
    useEffect(() => {
        setObj(JSON.parse(localStorage.getItem("money")));
    }, []);
    return(<div className="trans-outer-cont">
        <div className="title-outer-cont">
        <div className="title-cont">
            <h1>Transactions</h1>
            <div className="title-cont-inner">
            <h2 className="top-total">Total: <span>&#x20B9; {obj.total}</span></h2>
            <Link to="/search" id="search-bar"><img src="/Images/search-logo.svg" alt="logo"/>Search</Link>
            </div>
        </div>
        </div>
        <div className="list-cont-outer">
            {obj.entries.length > 0? 
            obj.entries.map((item, ind) => <ListItem ind={ind} item={item} />)
        :<p className="no-entry">No entry yet...!!</p>}
        </div>
    </div>);
}