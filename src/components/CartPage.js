import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const CartPage = () => {
  const automobiles = useSelector((store) => store.cart.items);
  console.log(automobiles);

  return (
    <>
      <div className="p-[20px]">
        <h1>
          <span className="text-7xl">{automobiles.length}</span> - Automobiles
          you have added to book
        </h1>

        <div className="flex flex-wrap">
          {automobiles.map((automobile) => {
            return <CartItem {...automobile} key={automobile.car_data.car_id} />;
          })}
        </div>
      </div>
    </>
  );
};
export default CartPage;
