import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/charge', {
        amount,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvc,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <br />
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />
        </label>
        <br />
        <label>
          Expiry Month:
          <input
            type="text"
            value={expiryMonth}
            onChange={(event) => setExpiryMonth(event.target.value)}
          />
        </label>
        <br />
        <label>
          Expiry Year:
          <input
            type="text"
            value={expiryYear}
            onChange={(event) => setExpiryYear(event.target.value)}
          />
        </label>
        <br />
        <label>
          CVC:
          <input
            type="text"
            value={cvc}
            onChange={(event) => setCvc(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default App;