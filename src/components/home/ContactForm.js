import React from "react";
import "./ContactForm.css";
import useInput from "../../hooks/use-input";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

const color = red[500];
const isNotEmpty = (value) => value.trim() !== "";
const emailValid = (value) => value.includes("@");

const ContactForm = () => {
  const {
    value: nameValueEntered,
    isValid: nameIsvalid,
    hasError: isNameInputInvalid,
    blurHandler: nameBlurHandler,
    inputChangeHandler: inputNameChangeHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: emailValueEntered,
    isValid: emailIsvalid,
    hasError: isEmailInputInvalid,
    blurHandler: emailBlurHandler,
    inputChangeHandler: inputEmailChangeHandler,
    reset: resetEmailInput,
  } = useInput(emailValid);
  const {
    value: subjectValueEntered,
    isValid: subjectIsvalid,
    hasError: isSubjectInputInvalid,
    blurHandler: subjectBlurHandler,
    inputChangeHandler: inputSubjectChangeHandler,
    reset: resetSubjectInput,
  } = useInput(isNotEmpty);
  const {
    value: messageValueEntered,
    isValid: messageIsvalid,
    hasError: isMessageInputInvalid,
    blurHandler: messageBlurHandler,
    inputChangeHandler: inputMessageChangeHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  let isFormValid = false;
  if (nameIsvalid && emailIsvalid && subjectIsvalid && messageIsvalid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsvalid || !emailIsvalid || !subjectIsvalid || !messageIsvalid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  };

  let inputClassName;
  if (isNameInputInvalid) {
    inputClassName = "form-control form-control_isInValid";
  } else {
    inputClassName = "form-control ";
  }
  let inputClassEmail;
  if (isEmailInputInvalid) {
    inputClassEmail = "form-control form-control_isInValid";
  } else {
    inputClassEmail = "form-control ";
  }
  let inputClassSubject;
  if (isEmailInputInvalid) {
    inputClassSubject = "form-control form-control_isInValid";
  } else {
    inputClassSubject = "form-control ";
  }
  let inputClassMessage;
  if (isEmailInputInvalid) {
    inputClassMessage = "form-control form-control_isInValid";
  } else {
    inputClassMessage = "form-control ";
  }

  return (
    <div className="contactUs_section">
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="exampleInputName"> Name</label>
          <input
            value={nameValueEntered}
            onChange={inputNameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            className={inputClassName}
            id="exampleInputName1"
          />
          {isNameInputInvalid && (
            <p style={{ color }}>The name section is empty.</p>
          )}
        </div>
        <div>
          <label htmlFor="exampleInputEmail1"> Email</label>
          <input
            value={emailValueEntered}
            onChange={inputEmailChangeHandler}
            onBlur={emailBlurHandler}
            type="text"
            className={inputClassEmail}
            id="exampleInputEmail1"
          />
          {isEmailInputInvalid && (
            <p style={{ color }}>The Email section is empty.</p>
          )}
        </div>
        <div>
          <label htmlFor="exampleInputSubject">Subject</label>
          <input
            value={subjectValueEntered}
            onChange={inputSubjectChangeHandler}
            onBlur={subjectBlurHandler}
            type="text"
            className={inputClassSubject}
            id="exampleInputSubject"
          />
          {isSubjectInputInvalid && (
            <p style={{ color }}>The Subject section is empty.</p>
          )}
        </div>
        <div>
          <label htmlFor="exampleInputMessage">Message</label>
          <textarea
            value={messageValueEntered}
            onChange={inputMessageChangeHandler}
            onBlur={messageBlurHandler}
            type="text"
            className={inputClassMessage}
            id="exampleInputMessage"
            rows="4"
            cols="50"
          />
          {isMessageInputInvalid && (
            <p style={{ color }}>The Message section is empty.</p>
          )}
        </div>

        <div>
          <Button disabled={!isFormValid} type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
      <div className="contactUs_image">
        <img
          alt="contactUs"
          src="https://static.wixstatic.com/media/7173b2f3bb944503a036d50e562c7a08.jpg/v1/fill/w_595,h_772,fp_0.61_0.14,q_85,usm_0.66_1.00_0.01/7173b2f3bb944503a036d50e562c7a08.webp"
        ></img>
      </div>
    </div>
  );
};
export default ContactForm;
