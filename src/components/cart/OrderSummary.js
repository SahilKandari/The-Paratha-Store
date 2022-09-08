import { Button, Slider } from "@mui/material";
import React, { useState } from "react";
import "./OrderSummary.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
function OrderSummary(props) {
  const [slider, setSlider] = useState("");
  const data = props.subData;
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.cart.orderedItems);

  const newSubTotal = data.map((item) => item.totalPrice);
  const newAddOns = data.map((item) => item.totalAddon);

  let subTotal = newSubTotal?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  let totalAddOn = newAddOns?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  let deliveryCharges = 0;
  if (slider > 5) {
    deliveryCharges = 100;
  } else {
    deliveryCharges = 0;
  }
  const totalOrderCost = deliveryCharges + totalAddOn + subTotal;
  const checkoutHandler = () => {
    alert("You've successfully ordered");
    dispatch(
      cartActions.checkout({
        data,
        totalOrderCost,
      })
    );
    console.log(orderedItems, "orderedItems");
  };
  return (
    <div className="orderSummary_section">
      <h4>Subtotal = Rs.{subTotal}</h4>
      <h4>Add On = Rs.{totalAddOn}</h4>
      <h4>Delivery = Rs.{deliveryCharges}</h4>
      <div>
        <h4>Select Distance in KM</h4>
        <Slider
          className="orderSummary_Slider"
          onChange={(e) => {
            setSlider(e.target.value);
          }}
          aria-label="Temperature"
          defaultValue={3}
          //   getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
        />
      </div>
      <h4>Total Cost = Rs.{totalOrderCost}</h4>
      <Button onClick={checkoutHandler} variant="contained">
        Checkout
      </Button>
    </div>
  );
}

export default OrderSummary;
