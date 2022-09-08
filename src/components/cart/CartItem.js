import { Button } from "@mui/material";
import React, { useState } from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function CartItem(props) {
  const dispatch = useDispatch();
  const { id, image, name, quantity, totalPrice, price, addOns, totalAddon } =
    props.data;
  const [checked, setChecked] = useState([]);
  //   const totalAddOn = useSelector((state) => state.cart.totalAddOn);
  console.log(totalAddon, "totalAddOn");
  const addItemHandler = () => {
    dispatch(
      cartActions.addItems({
        id,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItems(id));
  };

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);

    const updatedPrice = updatedList.map((str) => {
      return Number(str);
    });

    dispatch(cartActions.addAddons({ updatedPrice, id }));
  };

  return (
    <div className="cartItem_section">
      <img src={image} alt={name} />
      <div className="cartItem_price">
        <h3>{name}</h3>
        <p>Rs.{price}</p>
        <div className="cartItem_rangeButton">
          <Button onClick={removeItemHandler} variant="outlined">
            -
          </Button>
          <p>{quantity}</p>
          <Button onClick={addItemHandler} variant="outlined">
            +
          </Button>
        </div>
      </div>
      <div className="cartItem_addOns">
        <h3> Add Ons</h3>
        <ul>
          {addOns?.map((item, index) => (
            <li key={index}>
              <input
                onChange={handleCheck}
                type="checkbox"
                id={item.name}
                value={item.price}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="cartItem_final">
        <h3>
          Rs.{totalPrice}+{totalAddon}
        </h3>
        <Button onClick={() => dispatch(cartActions.removeWholeItem(id))}>
          x
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
