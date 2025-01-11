import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./card.css";
import man from "../../assets/man.png";
import women from "../../assets/women.png";
import children from "../../assets/2c551d7065d7a915de047e3fb37f9dcd.png";
import general from "../../assets/general.png";

const data = [
     {
          img: man,
          title: "Мужская парфюмерия",
          description: "Найдите свой идеальный аромат в мужской коллекции.",
          customClass: "custom-width-man" // Добавим кастомный класс
     },
     {
          img: women,
          title: "Женская парфюмерия",
          description: "Элегантные и изысканные ароматы для женщин.",
     },
     {
          img: children,
          title: "Детская парфюмерия",
          description: "Милые и нежные ароматы для детей.",
     },
     {
          img: general,
          title: "Общая парфюмерия",
          description: "Ароматы для всех: универсальные и привлекательные.",
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
                         <img src={item.img} alt={item.title} className={`card__image ${item.customClass || ""}`} />
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
