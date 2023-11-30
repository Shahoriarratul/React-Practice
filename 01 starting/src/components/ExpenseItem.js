import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import Expenses from "./Expenses";
function ExpenseItem(props) {
  const [title, setTitel] = useState(props.title);

  const clickHandler = () => {
    setTitel("updated!");
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Chnage title</button>
    </Card>
  );
}
export default ExpenseItem;
