import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus_section">
      <div className="aboutus_image">
        <img
          alt="aboutUs"
          src="https://static.wixstatic.com/media/dfdbade98080444d9d33a4468301cfcb.jpg/v1/fill/w_675,h_620,fp_0.47_0.31,q_85,usm_0.66_1.00_0.01/dfdbade98080444d9d33a4468301cfcb.webp"
        ></img>
      </div>
      <div className="aboutus_details">
        <h3>About Us</h3>
        <h5>Our Story</h5>
        <p>
          The Paratha Store is a premier and authentic Restaurant that has been
          proudly serving the Rishikesh area and beyond since 2000. Since then,
          our mission has been to provide high-quality food for all those that
          wish to combine fun and enjoyable ambiance with skillful cooking into
          one extraordinary dining experience. Scroll down to learn more about
          us.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
