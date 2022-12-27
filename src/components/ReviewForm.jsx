import React from "react";
import { useSelector } from "react-redux";
import { getSubTotal } from "../utils";

function ReviewForm() {
  const cart = useSelector((state) => state.cart?.value);
  const address = useSelector((state) => state.checkout?.address);
  const payment = useSelector((state) => state.checkout?.payment);

  const subtotal = getSubTotal(cart)?.toFixed(2);

  return (
    <div>
      <div className="border-b-2 border-gray-200">
        <h2 className="text-2xl font-medium">Order Summary</h2>
        <div className="my-10">
          {cart?.map((item) => {
            const { id, title, price } = item.product;
            return (
              <div key={id} className="flex justify-between mb-10 items-start">
                <div>
                  <p className="text-lg font-medium mb-2">{title}</p>
                  <p className="text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium text-xl">${price}</p>
              </div>
            );
          })}
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Total:</p>
            <p className="text-xl font-bold">${subtotal}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <div>
          <h2 className="text-2xl font-medium">Shipping</h2>
          <div className="my-10">
            <p>
              {address?.firstName} {address?.lastName}
            </p>
            <p>{address?.address1},</p>
            <p>{address?.address2},</p>
            <p>{address?.zipCode},</p>
            <p>{address?.city},</p>
            <p>{address?.country}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Payment Details</h2>
          <div className="my-10">
            <p>Card Type: VISA</p>
            <p>Card Number: {payment.cardNumber}</p>
            <p>Card Holder: {payment.nameOnCard}</p>
            <p>Expiry Date: {payment.expiryDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
