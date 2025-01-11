import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [scrollDirection, setScrollDirection] = useState(null);
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          AOS.init({
               duration: 500,
               easing: "ease-out",
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
               className={`navbar ${scrollDirection === "down" ? "navbar--hidden" : ""
                    } ${scrolled ? "scrolled" : ""}`}
          >
               <div className="navbar__logo" data-aos="fade-down">
                    <Link to="/">VIBE.</Link>
               </div>
               <div className={`navbar__links ${isOpen ? "open" : ""}`} data-aos="fade-down">
                    <Link to="/">Главная</Link>
                    <Link to="/all-products">Все продукты</Link>
                    <Link to="/about">О нас</Link>
               </div>
               <div
                    className="navbar__icon"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
               >
                    <AccountCircleIcon
                         sx={{ color: isOpen ? "#FFA500" : "#06324F" }}
                         data-aos="fade-down"
                    />
               </div>
          </nav>
     );
};

export default Navbar;
