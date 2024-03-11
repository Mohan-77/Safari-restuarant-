import React, { useEffect, useState } from "react";
import useShop from "../ShopContext";
import axios from "axios";

const Payment = () => {
  const initialPayment = {
    Equity: false,
    Agent: false,
    Pay: false,
  };

  const [payment, setPayment] = useState(initialPayment);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { total } = useShop();

  useEffect(() => {}, [payment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await processPayment();
  };

  const processPayment = async () => {
    try {
      const body = {
        schemaVersion: "1.0",
        requestId: "10111331033",
        timestamp: 1590587436057686,
        channelName: "WEB",
        serviceName: "API_PURCHASE",
        serviceParams: {
          merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
          apiUserId: process.env.REACT_APP_MERCHANT_API_USER_ID,
          apiKey: process.env.REACT_APP_MERCHANT_API_KEY,
          paymentMethod: "mwallet_account",
          paymentInfo: {
            accountNo: phone,
          },
          transactionInfo: {
            referenceId: "12334",
            invoiceId: "7896504",
            amount: total,
            currency: "USD",
            description: "React Shopping Cart",
          },
        },
      };

      setLoading(true);
      const { data } = await axios.post("https://api/waafi.com/asm", body);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handlePaymentSelect = (paymentType) => {
    setPayment({ ...initialPayment, [paymentType]: true });
  };

  return (
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
        <div
          className={`payment-card ${payment.Equity && "selected"}`}
          onClick={() => handlePaymentSelect("Equity")}
        >
          <h3>Equity Bank</h3>
        </div>

        <div
          className={`payment-card ${payment.Agent && "selected"}`}
          onClick={() => handlePaymentSelect("Agent")}
        >
          <h3>Agent</h3>
        </div>

        <div
          className={`payment-card ${payment.Pay && "selected"}`}
          onClick={() => handlePaymentSelect("Pay")}
        >
          <h3>Pay Pill</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" className="btn-proceed" disabled={loading}>
          {loading ? "Loading..." : "Proceed"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
