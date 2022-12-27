import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePayment } from "../features/checkout-slice";

function PaymentForm() {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.checkout?.payment);

  const handleChange = (e) => {
    const { name, value } = e.target ?? {};
    dispatch(updatePayment({ [name]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-medium my-10">Payment Details</h2>
      <form className="flex flex-col" onChange={(e) => handleChange(e)}>
        <div className="flex justify-between items-center">
          <input
            required
            type="text"
            name="nameOnCard"
            placeholder="Name on Card *"
            defaultValue={payment?.nameOnCard ?? ""}
            className="border-b-2 border-gray-300 py-2 w-full mr-10 my-4"
          />
          <input
            required
            type="text"
            name="cardNumber"
            placeholder="Card Number *"
            defaultValue={payment?.cardNumber ?? ""}
            className="border-b-2 border-gray-300 py-2 w-full my-4"
          />
        </div>
        <div className="flex justify-between items-center">
          <input
            required
            type="tel"
            name="expiryDate"
            placeholder="Expiry Date *"
            defaultValue={payment?.expiryDate ?? ""}
            className="border-b-2 border-gray-300 py-2 w-full mr-10 my-4"
          />
          <input
            required
            type="password"
            name="cvv"
            minLength="3"
            maxLength="3"
            placeholder="CVV *"
            defaultValue={payment?.cvv ?? ""}
            className="border-b-2 border-gray-300 py-2 w-full my-4"
          />
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
