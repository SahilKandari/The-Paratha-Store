import React, { useState } from "react";
import "./MenuModal.css";
import Modal from "../../UI/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { modalActions } from "../../store/modal-slice";
import { cartActions } from "../../store/cart-slice";

function MenuModal(props) {
  const modalData = useSelector((state) => state.modal.modalData);
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);

  // const totalModalPrice = modalData.price * quantity;
  // const quantityChangeHandler = (event) => {
  //   console.log("working");
  //   setQuantity(event.target.value);
  // };
  const addToCart = () => {
    alert("Added to cart successfully");
    // dispatch(cartActions.addItems({ quantity, totalModalPrice, ...modalData }));
    dispatch(cartActions.addItems(modalData));
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal className="menu_modal" onClick={props.onClick}>
      <img className="menu_modalImg" src={modalData.imageURL} />
      <div className="menu_modalData">
        <h3>{modalData.name}</h3>
        <p>Rs.{modalData.price}</p>
        {/* <div className="menu_modal_input">
          <label htmlFor="menu_modal_quantity">Quantity</label>
          <input
            onChange={quantityChangeHandler}
            id="menu_modal_quantity"
            type="number"
            min="1"
            max="10"
          ></input>
        </div> */}
        <p>{modalData.description}</p>
        <Button onClick={addToCart} variant="outlined">
          Add to Cart
        </Button>
      </div>
    </Modal>
  );
}

export default MenuModal;
