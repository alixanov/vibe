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
               duration: 500, // Длительность анимации
               easing: "ease-out", // Плавность
          });

          let lastScrollY = window.scrollY;

          const handleScroll = () => {
               const currentScrollY = window.scrollY;

               // Проверяем направление прокрутки
               if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    setScrollDirection("down"); // Скролл вниз
               } else if (currentScrollY < lastScrollY) {
                    setScrollDirection("up"); // Скролл вверх
               }

               lastScrollY = currentScrollY;

               // Устанавливаем флаг "scrolled" для изменения стиля Navbar
               setScrolled(currentScrollY > 50);
          };

          window.addEventListener("scroll", handleScroll);

          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <nav
               className={`navbar ${
                    scrollDirection === "down" ? "hidden" : "visible"
               } ${scrolled ? "scrolled" : ""}`}
               data-aos="slide-down"
          >
               <div className="navbar__logo">
                    <Link to="/">VIBE.</Link>
               </div>
               <div className={`navbar__links ${isOpen ? "open" : ""}`}>
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
                    />
               </div>
          </nav>
     );
};

export default Navbar;
