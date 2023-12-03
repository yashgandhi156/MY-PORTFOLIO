import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              similique sequi velit aperiam totam quis iusto? Deleniti,
              similique id, sunt porro eos neque ab sit nihil culpa labore
              perferendis autem rem nostrum asperiores laudantium corrupti atque
              voluptatibus voluptatum officiis. Soluta alias autem, commodi quos
              suscipit modi maiores possimus! Placeat maiores assumenda
              inventore vel doloribus, sunt non. Sequi, corporis harum dolorem
              numquam, quis nesciunt atque tempore quae? Quibusdam consequatur
              quidem pariatur hic, ipsam eum beatae labore tempora quis fugit?
              Vitae, aperiam velit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
