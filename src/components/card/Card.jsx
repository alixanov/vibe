import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./card.css";
import man from "../../assets/man.png";
import women from "../../assets/women.png";
import children from "../../assets/kids.png";
import general from "../../assets/general.png"

const data = [
     {
          img: man,
          title: "Мужская коллекция",
          description: "Откройте для себя стильные вещи для мужчин.",
     },
     {
          img: women,
          title: "Женская коллекция",
          description: "Коллекция для женщин: элегантность и комфорт.",
     },
     {
          img: children,
          title: "Детская коллекция",
          description: "Милые и стильные вещи для детей.",
     },
     {
          img: general,
          title: "Общая коллекция",
          description: "Милые и стильные вещи для детей.",
     },
];

const Card = () => {
     useEffect(() => {
          AOS.init({
               duration: 800,
               easing: "ease-in-out",
               offset: 150,
               once: false,
          });
     }, []);

     return (
          <div className="card-container">
               {data.map((item, index) => (
                    <div
                         key={index}
                         className={`card card--size-${index + 1}`} // Классы для разных размеров карточек
                         data-aos="fade-up"
                         data-aos-delay={index * 200}
                    >
                         <img src={item.img} alt={item.title} className="card__image" />
                         <div className="card__content">
                              <h3 className="card__title">{item.title}</h3>
                              <p className="card__description">{item.description}</p>
                              <button className="card__button">Подробнее</button>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default Card;
