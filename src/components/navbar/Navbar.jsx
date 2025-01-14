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

<<<<<<< HEAD
  useEffect(() => {
    AOS.init({
      duration: 500, // Animatsiyaning davomiyligi
      easing: "ease-out", // Animatsiya effekti
    });
=======
     useEffect(() => {
          AOS.init({
               duration: 500,
               easing: "ease-out",
          });
>>>>>>> 23e4169bdfddf489180397429ce9a06573415326

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

<<<<<<< HEAD
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
=======
               if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    setScrollDirection("down");
               } else if (currentScrollY < lastScrollY) {
                    setScrollDirection("up");
               }

               lastScrollY = currentScrollY;
               setScrolled(currentScrollY > 50);
          };
>>>>>>> 23e4169bdfddf489180397429ce9a06573415326

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

<<<<<<< HEAD
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
=======
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
>>>>>>> 23e4169bdfddf489180397429ce9a06573415326
};

export default Navbar;
