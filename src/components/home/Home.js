import React, { Fragment } from "react";
import AboutUs from "./AboutUs";
import BestFood from "./BestFood";
import ContactForm from "./ContactForm";
import "./Home.css";

function Home() {
  return (
    <Fragment>
      <div className="home_section">
        <div className="home_header">
          <div className="home_card">
            <h3>Eat, Drink</h3>
            <h3>& Relax.</h3>
            <p>Treat Yourself</p>
          </div>
        </div>
      </div>
      <AboutUs />
      <BestFood />
      <ContactForm />
    </Fragment>
  );
}

export default Home;
