import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cart-slice";
import { getSubTotal } from "../utils";

const Cart = () => {
  const cart = useSelector((state) => state.cart?.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const subtotal = getSubTotal(cart)?.toFixed(2);

  const updateQuantity = (e, { product, quantity }) => {
    const updatedQuantity = Number(e.target.value);
    if (updatedQuantity < quantity) {
      dispatch(removeFromCart({ product }));
    } else {
      dispatch(addToCart({ product }));
    }
  };

  function navigateToCheckout() {
    navigate("/checkout");
  }

  function navigateToProducts() {
    navigate("/");
  }

  return (
    <div className="max-w-7xl px-4 mx-auto mt-20 pb-20">
      <div className="flex justify-between">
        {subtotal > 0 ? (
          <>
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <div className="flex items-center">
              <h4 className="text-2xl font-bold mr-4">
                <span className="text-xl font-normal">Subtotal:</span> $
                {subtotal}
              </h4>
              <button
                onClick={navigateToCheckout}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg"
              >
                Buy now
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <button
              onClick={navigateToProducts}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg"
            >
              Products
            </button>
          </>
        )}
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
                <div className="h-52 w-52 flex-shrink-0 overflow-hidden">
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
                  <form className="flex">
                    <input
                      type="number"
                      id={`${id}-product-id`}
                      name="quantity"
                      value={quantity}
                      min="0"
                      max="10"
                      onChange={(e) => updateQuantity(e, { product, quantity })}
                    />
                  </form>
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
