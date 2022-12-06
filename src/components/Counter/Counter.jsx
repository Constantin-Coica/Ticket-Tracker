import "./Counter.scss";
import {useState} from "react";

const Counter = () => {

  

  const [counter, setCounter] = useState(0);
  const handleClick = (sign) =>{
    return sign === "+" ? setCounter(counter + 1): sign === "-" && counter>0 ? setCounter(counter-1): "";
  }
  
  return <div className="counter">
    <div className="counter-bar">Counter</div>
    <h3>Counter</h3>
    <p>{counter}</p>
    <div className="buttons">
    <button className="button" onClick={()=> handleClick("-")}>-</button>
    <button className="button" onClick={()=> handleClick("+")}>+</button>
    </div>
  </div>;

};

export default Counter;