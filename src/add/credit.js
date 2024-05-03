import {useState} from "react";

export default function Debit() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [dateObj, setDateObj] = useState(null);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [message, setMessage] = useState("");
    const [isFinal, setFinal] = useState(false);

    const handleReset = (e) => {
        setTitle("");
        setAmount(0);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(amount);
        if(amount === 0) {
            setMessage("Amount should be more than zero");
            return;
        }
        let date  = new Date();
        setDateObj(date);
        let strDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        setDate(strDate);
        let strTime = (date.getHours()%12) + ":" + date.getMinutes() + (date.getHours() > 11? " PM" : " AM");
        setTime(strTime);
        setFinal(true);
    }

    const handleFinalSubmit = () => {
        const curr = {title, amount, add: false, date: dateObj};
        const obj = JSON.parse(localStorage.getItem("money"));
        if(amount > obj.total) {
            setMessage(`Amount is greater than balance(\u20B9 ${obj.total})`);
            setFinal(false);
            return;
        }
        obj.total = +obj.total - +amount;
        obj.credit = +obj.credit + +amount;
        obj.entries.unshift(curr);
        localStorage.setItem("money", JSON.stringify(obj));
        window.location = "/";
    }

    if(isFinal) {
        return(<div className="final-outer-cont">
            <h1 className="final-heading credit-color">Credit Amount -</h1>
            <div className="final-inner-cont">
            <div className="final-cont">
                <h2>Title: </h2>
                <p>{title}</p>
            </div>
            <div className="final-cont">
                <h2>Amount: </h2>
                <p>&#x20B9; {amount}</p>
            </div>
            <div className="final-cont">
                <h2>Date: </h2>
                <p>{date}</p>
            </div>
            <div className="final-cont">
                <h2>Time: </h2>
                <p>{time}</p>
            </div>
            </div>
            <div className="button-cont">
                <button className="reset-button" onClick={() => {setFinal(false)}}>Cancel</button>
                <button className="submit-button" onClick={handleFinalSubmit}>Confirm</button>
            </div>
        </div>)
    };
    return(<form className="form-outer" onSubmit={handleSubmit}>
        <h2 className="mess-cont">{message}</h2>
        <div className="input-outer">
            <h3 className="input-title">Title</h3>
            <input className="input-ele" type="text" value={title} placeholder="Source" onChange={(e) => setTitle(e.target.value)} required/>
        </div>
        <div className="input-outer">
            <h3 className="input-title">Amount</h3>
            <input className="input-ele" type="number" value={amount === 0? null: amount} placeholder="In ruppees" onChange={(e) => setAmount(e.target.value)}
            required/>
        </div>
        <div className="button-cont">
        <button type="reset" className="reset-button" onClick={handleReset}>Reset</button>
        <button type="submit" className="submit-button bg-credit">Credit</button>
        </div>
    </form>)
}

