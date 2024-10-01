import React from "react";
import "./hero.css";
import Button from "../button/Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero banner section" id="hero">
      <div className="hero__container container">
        <div className="hero__flex-container">
          <div className="hero__content">
            <h1 className="hero__title">Hi, I am John</h1>
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "React Developer",
                2000,
                "Freelancer",
                2000,
              ]}
              cursor={false}
              wrapper="div"
              speed={5}
              className="hero__subtitle"
              repeat={Infinity}
            />
            <p className="hero__description">
              I love Graphic design and Photography and have been working on my
              portfolio since 2016. I Can give your business a new Creative
              start right away!
            </p>
            <div className="button_container">
              <Button text={"Hire Me"} btn={"btn-primary"} />
              <Button text={"My Portfolio"} btn={"btn-transparent"} />
            </div>
          </div>
          <div className="hero__img-container">
            <img
              className="hero__img"
              src="https://wp.w3layouts.com/ui-portfolio/wp-content/themes/ui-portfolio/assets/images/banner.png"
              alt="John Watson"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
