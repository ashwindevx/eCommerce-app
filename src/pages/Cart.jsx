import { useSelector } from "react-redux";
import { getSubTotal } from "../utils";

const Cart = () => {
  const cart = useSelector((state) => state.cart?.value);

  const subtotal = getSubTotal(cart)?.toFixed(2);

  return (
    <div className="max-w-7xl px-4 mx-auto mt-20 pb-20">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <div className="flex items-center">
          <h4 className="text-2xl font-bold mr-4">
            <span className="text-xl font-normal">Subtotal:</span> ${subtotal}
          </h4>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-lg">
            Buy now
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl mt-10 drop-shadow-xl">
        {cart?.map(({ product, quantity }) => {
          const { id, title, description, price, image } = product;
          return (
            <div
              key={id}
              className="flex justify-between pl-4 pr-10 py-20 border-gray-100 border-b-2 last:border-0"
            >
              <div className="flex w-3/4">
                <div class="h-52 w-52 flex-shrink-0 overflow-hidden">
                  <img
                    src={image}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="ml-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-md font-normal mb-2 text-gray-500">
                      {description}
                    </p>
                  </div>
                  <div className="flex">
                    <select
                      id="quantity"
                      // onChange={handleCategoryChange}
                      // value={selectedCategory}
                      className="bg-teal-200 mr-4 border w-16 border-teal-500 text-black text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2"
                    >
                      <option defaultValue>1</option>
                      <option defaultValue="two">2</option>
                      <option defaultValue="three">3</option>
                      <option defaultValue="four">4</option>
                      <option defaultValue="five">5</option>
                      <option defaultValue="six">6</option>
                      <option defaultValue="seven">7</option>
                      <option defaultValue="eight">8</option>
                      <option defaultValue="nine">9</option>
                      <option defaultValue="ten">10</option>
                    </select>
                    <button className="py-2 px-4 border-2 border-gray-100 rounded-xl">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xl font-bold">${price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
