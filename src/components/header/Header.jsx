import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import { gsap } from 'gsap';
import 'aos/dist/aos.css';
import birinchi from '../../assets/1.png';
import ikkinchi from '../../assets/2.png';
import uchinchi from '../../assets/3.png';
import './header.css';

const Header = () => {
     const backgroundRef = useRef(null);

     useEffect(() => {
          AOS.init({
               duration: 1000,
               easing: 'ease-out',
          });

          const handleMouseMove = (e) => {
               const { clientX, clientY } = e;
               const { innerWidth, innerHeight } = window;

               const xPercent = (clientX / innerWidth) * 100;
               const yPercent = (clientY / innerHeight) * 100;

               gsap.to(backgroundRef.current, {
                    background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, #FFA500, #06324F)`,
                    duration: 0.5,
               });
          };

          window.addEventListener('mousemove', handleMouseMove);

          return () => {
               window.removeEventListener('mousemove', handleMouseMove);
          };
     }, []);

     return (
          <div className="header__container">
               <div ref={backgroundRef} className="header__background" />
               <div
                    className="header__title"
                    data-aos="fade-up"
                    data-aos-delay="200"
               >
                    <h1>
                         <span>Раскройте</span> свою истинную красотуу  
                    </h1>
                    <p>Откройте для себя нашу роскошную парфюмерию и средства по уходу.</p>
               </div>
               <div className="header__img">
                    <img
                         src={birinchi}
                         alt="Первый продукт"
                         className="header__img-first"
                         data-aos="fade-right"
                         data-aos-delay="400"
                    />
                    <img
                         src={ikkinchi}
                         alt="Второй продукт"
                         className="header__img-second"
                         data-aos="zoom-in"
                         data-aos-delay="600"
                    />
                    <img
                         src={uchinchi}
                         alt="Третий продукт"
                         className="header__img-third"
                         data-aos="fade-left"
                         data-aos-delay="800"
                    />
               </div>
          </div>
     );
};

export default Header;
