import { useSelector } from "react-redux";
export const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  console.log(cartProducts);

  return (
    <div>
      Cart
      {cartProducts?.length !== 0 ? (
        <ul>
          {cartProducts?.map((product) => (
            <li key={product.id}>
              <span>{product.title}</span>
              <span>{product.description}</span>
              <span>{product.brand}</span>
              <span>{product.price}</span>
              <span>* {product.quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products added to cart yet</p>
      )}
    </div>
  );
};
