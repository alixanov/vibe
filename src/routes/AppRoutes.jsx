import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/Home/Home";
import Product from "../components/product/Product";
import Footer from "../components/footer/Footer";

const AppRoutes = () => {
     const backgroundRef = useRef(null);

     useEffect(() => {
          const animation = gsap.timeline({ repeat: -1, yoyo: true });

          animation.to(backgroundRef.current, {
               background: "radial-gradient(circle, #ff9a9e, #fad0c4, #fbc2eb)",
               duration: 2, // Ускорено: 2 секунды
               ease: "power1.inOut",
          })
               .to(backgroundRef.current, {
                    background: "radial-gradient(circle, #a18cd1, #fbc2eb, #fad0c4)",
                    duration: 2, // Ускорено: 2 секунды
                    ease: "power1.inOut",
               })
               .to(backgroundRef.current, {
                    background: "radial-gradient(circle, #fad0c4, #a1c4fd, #c2e9fb)",
                    duration: 2, // Ускорено: 2 секунды
                    ease: "power1.inOut",
               });

          return () => {
               animation.kill(); // Уничтожить анимацию при размонтировании
          };
     }, []);

     return (
          <div className="app-container" ref={backgroundRef}>
               <Navbar />
               <div className="content">
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/all-products" element={<Product />} />
                    </Routes>
               </div>
               <Footer />
          </div>
     );
};

export default AppRoutes;
