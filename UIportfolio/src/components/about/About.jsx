import React from "react";
import "./about.css";
import Button from "../button/Button";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <div className="about__content  ">
          {/* Left: Image Section */}
          <div className="about__img-wrapper">
            <img
              src="https://wp.w3layouts.com/ui-portfolio/wp-content/themes/ui-portfolio/assets/images/about.jpg"
              alt="John Watson"
              className="about__img"
            />
          </div>

          {/* Right: Text Section */}
          <div className="about__data">
            <h6 className="about__bio-title">MY BIOGRAPHY</h6>
            <h3 className="about__headline">
              A Lead UI Designer & Web Developer Based In UK
            </h3>

            <p className="about__description">
              I love Graphic design and Photography and have been working on my
              portfolio since 2016. I Can give your business a new Creative
              start right away! Contact me and we will discuss your projects!
            </p>

            {/* Info Section */}
            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-title">Name:</span>
                <p className="about__info-detail">John Watson</p>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">From:</span>
                <p className="about__info-detail">London, UK</p>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">Email:</span>
                <p className="about__info-detail">example@mail.com</p>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">Phone:</span>
                <p className="about__info-detail">+21 234 567 8901</p>
              </div>
            </div>

            {/* Social Icons */}
            <ul className="about__social">
              <li>
                <h5>Follow me on</h5>
              </li>
              <li>
                <a href="#" className="about__social-link">
                  <i className="fab fa-behance"></i>
                </a>
              </li>
              <li>
                <a href="#" className="about__social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="about__social-link">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="about__social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>

            {/* Buttons */}
            <div className="about__buttons">
            <Button btn={"btn-primary"} text={"Hire me"}/>
            <Button btn={"btn-secondary"} text={"Download CV"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
