import React, { useEffect, useRef } from "react"; // React'дан зарур хукукларни импорт қилиш
import { Route, Routes } from "react-router-dom"; // Маршрутизатор компонентларини импорт қилиш
import { gsap } from "gsap"; // GSAP'ни импорт қилиш учун анимация қилиш
import Navbar from "../components/navbar/Navbar"; // Navbar компонентни импорт қилиш
import Home from "../components/Home/Home"; // Home компонентни импорт қилиш
import Product from "../components/product/Product"; // Product компонентни импорт қилиш
import Footer from "../components/footer/Footer"; // Footer компонентни импорт қилиш
import About from "../components/about/About"; // About компонентни импорт қилиш

const AppRoutes = () => {
<<<<<<< HEAD
     const backgroundRef = useRef(null);
     
=======
     const backgroundRef = useRef(null); // Фон учун рефни яратиш

>>>>>>> 23e4169bdfddf489180397429ce9a06573415326
     useEffect(() => {
          // GSAP билан анимацияни белгилаш
          const animation = gsap.timeline({ repeat: -1, yoyo: true });

          // Фонни ўзгартириш учун кетма-кет анимациялар ўрнатилмоқда
          animation.to(backgroundRef.current, {
               background: "radial-gradient(circle, #ff9a9e, #fad0c4, #fbc2eb)", // Биринчи фон градиенти
               duration: 2, // Анимация давомийлиги секундларда
               ease: "power1.inOut", // Переходнинг ҳамжиллиги
          })
               .to(backgroundRef.current, {
                    background: "radial-gradient(circle, #a18cd1, #fbc2eb, #fad0c4)", // Иккинчи фон градиенти
                    duration: 2, // Анимация давомийлиги секундларда
                    ease: "power1.inOut", // Переходнинг ҳамжиллиги
               })
               .to(backgroundRef.current, {
                    background: "radial-gradient(circle, #fad0c4, #a1c4fd, #c2e9fb)", // Учинчи фон градиенти
                    duration: 2, // Анимация давомийлиги секундларда
                    ease: "power1.inOut", // Переходнинг ҳамжиллиги
               });

          return () => {
               animation.kill(); // Компонент ажратилганда анимацияни ўчириш
          };
     }, []);

     return (
          <div className="app-container" ref={backgroundRef}> {/* Контейнерга рефни белгилаш */}
               <Navbar /> {/* Navbar компонентни киритиш */}
               <div className="content"> {/* Контент учун контейнер */}
                    <Routes>
                         <Route path="/" element={<Home />} /> {/* Асосий саҳифа учун маршрут */}
                         <Route path="/all-products" element={<Product />} /> {/* Маҳсулотлар саҳифаси учун маршрут */}
                         <Route path="/about" element={<About />} /> {/* "Биз ҳақимизда" саҳифаси учун маршрут */}
                    </Routes>
               </div>
               <Footer /> {/* Footer компонентни киритиш */}
          </div>
     );
};

export default AppRoutes; // AppRoutes компонентни экспорт қилиш
