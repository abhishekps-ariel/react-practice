import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data));
      })
      .catch((err) => console.log(err));
  }, []);

  function converter() {
    if (!amount) {
      setConvertedAmount("");
      return;
    }

    // Same currency case
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const rate = data[fromCurrency][toCurrency];
        const result = (amount * rate).toFixed(2);
        setConvertedAmount(result);
      })
      .catch((err) => console.log(err));
  }

  console.log(currencies);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div
      className="w-96 p-5 bg-white/20 
  backdrop-blur-md 
  border border-white/30  shadow-2xl rounded-2xl"
    >
      <p className="text-xl font-bold mb-4 text-center">Currency Converter</p>

      {/* FROM */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <label className="text-sm">From</label>
          <input
            type="number"
            placeholder="Amount"
            className="block mt-1 px-2 py-1 border rounded w-32"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Currency</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="block mt-1 px-2 py-1 border rounded w-32"
          >
            {currencies.map((e) => (
              <option key={e} value={e}>
                {e.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* SWAP */}
      <div className="flex justify-center my-3">
        <button
          className="px-4 py-1 border rounded bg-white shadow"
          onClick={handleSwap}
        >
          ⇅ Swap
        </button>
      </div>

      {/* TO */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-sm">To</label>
          <input
            type="number"
            placeholder="Converted"
            readOnly
            className="block mt-1 px-2 py-1 border rounded w-32 bg-gray-100"
            value={convertedAmount}
            onChange={(e) => setConvertedAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Currency</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="block mt-1 px-2 py-1 border rounded w-32"
          >
            {currencies.map((e) => (
              <option key={e} value={e}>
                {e.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CONVERT BUTTON */}
      <div className="flex justify-center">
        <button
          className="px-6 py-2 bg-green-400 rounded font-bold shadow active:bg-green-500"
          onClick={converter}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
