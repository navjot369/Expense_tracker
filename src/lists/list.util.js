import "./list.css";

export default function ListItem({ind, item}) {
    const date = new Date(item.date);
    const dateStr = date.getDate() + " " + date.toLocaleString("default", {month: "long"}) + " " + date.getFullYear() + "  " + (date.getHours()%12) + ":" + (date.getMinutes() > 9? "":"0") + date.getMinutes() + (date.getHours() > 11? " PM":" AM");
    const color = item.add? "green":"red";
    console.log(date);
    return(<div className="list-item">
        <div className={"list-ind-cont side-"+color}>
            <h3 className="ind-cont">{ind+1}</h3>
        </div>
        <div className="list-main-cont">
            <div className="list-left-cont">
                <h2 className="list-topic-cont">{item.title}</h2>
                <h6 className="date-cont">{dateStr}</h6>
            </div>
            <div className={"price-cont color-"+color}>
                &#x20B9; {item.amount} {item.add? "+" : "-" }</div>
        </div>
    </div>);
}