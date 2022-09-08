import React from "react";
import "./BestFood.css";

function BestFood() {
  return (
    <div className="bestFood_section">
      <div className="bestFood_header">
        <h3>Food</h3>
        <h5>Food for Every Mood</h5>
      </div>
      <div className="bestFood_body">
        <div className="bestFood_detail">
          <h4>Soup of the Day</h4>
          <p>
            This latest addition to our menu has already become our customers’
            favorite. Day or night, our Soup of the Day is the dish you’ve been
            craving. Don’t forget to ask your server about our special extras!
          </p>
        </div>
        <div className="bestFood_image">
          <img
            alt="bestDishes"
            src="https://static.wixstatic.com/media/11062b_6e987737acd94b27adfbda8c8a00f8b0~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_595,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/11062b_6e987737acd94b27adfbda8c8a00f8b0~mv2_d_5616_3744_s_4_2.webp"
          ></img>
        </div>
      </div>
      <div className="bestFood_body">
        <div className="bestFood_detail">
          <h4>Lamb Shank</h4>
          <p>
            With our Lamb Shank we’ve managed to put a new spin on an old
            classic. Simplicity is the name of the game: we use fresh
            ingredients and offer a variety of extras on the side. Are you ready
            for this culinary sensation?
          </p>
        </div>
        <div className="bestFood_image">
          <img
            alt="bestDishes"
            src="https://static.wixstatic.com/media/11062b_1c746961dd0a42dabfe01648aaa4d1a2~mv2_d_4000_2667_s_4_2.jpg/v1/fill/w_595,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/11062b_1c746961dd0a42dabfe01648aaa4d1a2~mv2_d_4000_2667_s_4_2.webp"
          ></img>
        </div>
      </div>
      <div className="bestFood_body">
        <div className="bestFood_detail">
          <h4>Vegetable Couscous</h4>
          <p>
            Many restaurants have their own take on this recipe, but we’re
            confident that ours is the best, always prepared to perfection.
            Share it with friends or have it all to yourself—you’ll enjoy it
            till the very last bite.
          </p>
        </div>
        <div className="bestFood_image">
          <img
            alt="bestDishes"
            src="https://static.wixstatic.com/media/11062b_ffa64e7599ea49aab622a2ca3aa7c812~mv2_d_5674_3783_s_4_2.jpg/v1/fill/w_595,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/11062b_ffa64e7599ea49aab622a2ca3aa7c812~mv2_d_5674_3783_s_4_2.webp"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default BestFood;
