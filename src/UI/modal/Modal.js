import "./Modal.css";
import React, { Fragment } from "react";
import ReactDom from "react-dom";

function Modal(props) {
  const classes = "modal_card " + props.className;
  return ReactDom.createPortal(
    <Fragment>
      <div className="overlay " onClick={props.onClick} />
      <div className={classes}>{props.children}</div>
    </Fragment>,
    document.getElementById("modal-root")
  );
}
export default Modal;
