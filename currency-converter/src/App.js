import { useEffect, useState } from "react";

function App() {
  const [currency, setCurrency] = useState(null);
  const [output, setOutput] = useState("");
  const [conversionRate, setConverionRate] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setTocurrency] = useState("EUR");
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchConversion() {
        if (currency !== null) {
          try {
            const res = await fetch(
              `https://api.frankfurter.app/latest?amount=${currency}&from=${fromCurrency}&to=${toCurrency}`,
              { signal: controller.signal }
            );
            if (!res.ok) {
              throw new Error("something Went wrong in fethching");
            }
            const data = await res.json();
            const ratesObj = Object.values(data.rates);
            const rates = ratesObj[0];
            setOutput(rates.toFixed(2));
          } catch (err) {
            if (err.name !== "AbortError") {
              setError(err.message);
              console.log(err.message);
            }
          }
        } else {
          setOutput("0");
        }
      }

      fetchConversion();
      if (fromCurrency === toCurrency) return setOutput(currency);

      setOutput(currency);

      return function () {
        controller.abort();
      };
    },
    [currency, fromCurrency, toCurrency]
  );
  return (
    <div>
      <input
        type="text"
        value={currency === null ? "0" : currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setTocurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}

export default App;
