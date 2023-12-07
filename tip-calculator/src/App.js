import { useState } from "react";
import "./App.css";
export default function App() {
  const [bill, setBill] = useState("");
  const [service, setServic] = useState(0);
  const [fservice, setFservice] = useState(0);

  function handleBill(e) {
    setBill(e.target.value);
  }
  function handleService(e) {
    setServic(e.target.value);
  }
  function handleFService(e) {
    setFservice(e.target.value);
  }
  function handButton() {
    setBill(0);
    setServic(0);
    setFservice(0);
  }
  return (
    <div>
      <Form
        bill={bill}
        service={service}
        fservice={fservice}
        onBill={handleBill}
        onService={handleService}
        onFservice={handleFService}
      />
      <Payment bill={bill} service={service} fservice={fservice} />
      <button onClick={handButton}>clear</button>
    </div>
  );
}
function Form({
  bill,
  service,
  fservice,

  onBill,
  onService,
  onFservice,
}) {
  return (
    <form>
      <div className="container">
        <h1 className="box">How much was the bill </h1>
        <input value={bill} onChange={onBill} className="box" type="number" />
      </div>
      <div className="container">
        <h1 className="box">How did you like the service </h1>
        <select value={service} onChange={onService} className="box">
          <option value="0">Dissatisfaction(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amezing(20%)</option>
        </select>
      </div>
      <div className="container">
        <h1 className="box">How did your friend like the service </h1>
        <select value={fservice} onChange={onFservice} className="box">
          <option value="0">Dissatisfaction(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amezing(20%)</option>
        </select>
      </div>
    </form>
  );
}
function Payment({ bill, service, fservice }) {
  let percentageService =
    Number(bill) * Number(`0.${service === "5" ? "05" : service}`);

  let percentFservice =
    Number(bill) * Number(`0.${fservice === "5" ? "05" : fservice}`);

  let tip = (Number(percentageService) + Number(percentFservice)) / 2;
  let billtotal = Number(bill) + tip;

  return (
    <h2>
      You Pay ${billtotal} (${bill} + ${tip}
      tip)
    </h2>
  );
}
