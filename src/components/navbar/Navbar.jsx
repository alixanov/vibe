import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease-out", // Animatsiya effekti
    });

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrollDirection === "down" ? "hidden" : "visible"} ${scrolled ? "scrolled" : ""}`}
      data-aos="slide-down"
    >
      <div className="navbar__logo">
        <Link to="/">VIBE.</Link>
      </div>
      <div className={`navbar__links ${isOpen ? "open" : ""}`}>
        <Link to="/">Bosh Sahifa</Link>
        <Link to="/all-products">Mahsulotlar</Link>
        <Link to="/about">Biz Haqimizda</Link> {/* About-ga yo'naltiruvchi link */}
      </div>
      <div
        className="navbar__icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <AccountCircleIcon sx={{ color: isOpen ? "#FFA500" : "#06324F" }} />
      </div>
    </nav>
  );
};

export default Navbar;
