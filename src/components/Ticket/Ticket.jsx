import "./Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = (props) => {
    const {name, role} = props;
  
    return <div className="ticket">
        <div className="bar">
            <div className="ticket-title">Ticket</div>
            <button className="minimise">—</button>
            <button className="maximise"><img src="https://img.icons8.com/metro/26/null/maximize-window.png"/></button>
            <button className="close">X</button>
        </div>
        <h2>Name: {name}</h2>
        <h3>Role: {role}</h3>
        <Counter className="ticket-counter" />
    </div>;

};

export default Ticket