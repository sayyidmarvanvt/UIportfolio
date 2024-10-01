import React, { useEffect, useState } from "react";
import "./navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav container">
        <div className="nav__logo">
          <a href="">
            <i className="fas fa-mountain"></i>UI Portfolio
          </a>
        </div>

        <div className={`nav__menu ${isOpen ? "active" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#hero" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <Button text={"Hire Me"} btn={"btn-primary"} />
            </li>
          </ul>
        </div>
        <button className="nav__toggle" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
