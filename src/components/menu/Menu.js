import React, { Fragment } from "react";
import "./Menu.css";
import { DUMMY_MEALS } from "../../dummy_menu_api";
import MenuModal from "./MenuModal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
function Menu() {
  const showModal = useSelector((state) => state.modal.show);
  const dispatch = useDispatch();
  const currentModal = (obj) => {
    dispatch(modalActions.openModal(obj));
    dispatch(modalActions.showModal());
  };

  return (
    <div className="menu_section">
      {!showModal ? (
        <Fragment>
          {" "}
          {DUMMY_MEALS.map((meal) => (
            <div
              onClick={() => currentModal(meal)}
              key={meal.id}
              className="menu_card"
            >
              <img alt={meal.name} src={meal.imageURL} />
              <h4>{meal.name}</h4>
              <p>Rs.{meal.price}</p>
            </div>
          ))}
        </Fragment>
      ) : (
        <MenuModal onClick={() => dispatch(modalActions.hideModal())} />
      )}
    </div>
  );
}

export default Menu;
