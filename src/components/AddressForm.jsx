import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAddress } from "../features/checkout-slice";

function c(param) {
  console.log(param);
}

const AddressForm = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.checkout?.address);

  const handleChange = (e) => {
    const { name, value } = e.target ?? {};
    dispatch(updateAddress({ [name]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-medium my-10">Shipping Address</h2>
      <form className="flex flex-col" onChange={(e) => handleChange(e)}>
        <div className="flex justify-between items-center">
          <input
            required
            type="text"
            name="firstName"
            placeholder="First Name*"
            defaultValue={address?.firstName ?? ""}
            className="border-b-2 border-gray-300 py-2 w-full mr-10 my-4"
          />
          <input
            required
            type="text"
            name="lastName"
            placeholder="Second Name*"
            defaultValue={address?.lastName ?? ""}
            className="border-b-2 border-gray-300 py-2 w-full my-4"
          />
        </div>
        <input
          required
          type="text"
          name="address1"
          placeholder="Address Line 1*"
          defaultValue={address?.address1 ?? ""}
          className="border-b-2 border-gray-300 py-2 w-full my-4"
        />
        <input
          required
          type="text"
          name="address2"
          placeholder="Address Line 2*"
          defaultValue={address?.address2 ?? ""}
          className="border-b-2 border-gray-300 py-2 w-full my-4"
        />
        <input
          required
          type="text"
          name="city"
          placeholder="City*"
          defaultValue={address?.firstName ?? ""}
          className="border-b-2 border-gray-300 py-2 w-full my-4"
        />
        <input
          required
          type="text"
          name="zipCode"
          placeholder="Zip Code*"
          defaultValue={address?.zipCode ?? ""}
          className="border-b-2 border-gray-300 py-2 w-full my-4"
        />
        <input
          required
          type="text"
          name="country"
          placeholder="Country*"
          defaultValue={address?.country ?? ""}
          className="border-b-2 border-gray-300 py-2 w-full my-4"
        />
      </form>
    </div>
  );
};

export default AddressForm;
