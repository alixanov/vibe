import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

import parfumImage from '../../assets/parfum-image.jpg';  // Parfumeriya rasmi
import officeImage from '../../assets/office-image.jpg';  // Ofis rasmi

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,  // Animatsiya faqat bir marta ishlaydi
    });
  }, []);

  return (
    <div className="about-container">
      {/* Malumotlar */}
      <div className="about-text">
        <h2 data-aos="fade-up">Bizning Vibe do'koni va mahsulotlarimiz</h2>
        <h6 data-aos="fade-left" data-aos-delay="100">
          Vibe parfumeriya va kosmetika do'koni sizni eng yuqori sifatli mahsulotlar bilan kutib oladi. Bizning maqsadimiz, sizga ajoyib tajriba taqdim etish va go'zallikni yanada yaxshilashdir.
        </h6>
        <h6 data-aos="fade-right" data-aos-delay="200">
          Bizning do'konimizda har bir mijoz uchun o'ziga xos mahsulotlar mavjud. Sizning ehtiyojlaringizni hisobga olib, sizga eng yaxshi xizmatlarni taqdim etishga intilamiz.
        </h6>
        <h6 data-aos="fade-up" data-aos-delay="300">
          Biz har doim eng yangi va sifatli kosmetika va parfyumeriya mahsulotlarini taqdim etamiz, va mijozlarimizni har tomonlama qo'llab-quvvatlashga tayyormiz.
        </h6>
        <h6 data-aos="fade-left" data-aos-delay="400">
          Bizning do'konimizda har bir kishi uchun maxsus sovg'alar va aksiyalar mavjud. Bizning asosiy maqsadimiz – go'zallik va nafislikni kundalik hayotingizga olib kirishdir!
        </h6>
      </div>

      {/* Rasmlar va matnlar */}
      <div className="about-images" data-aos="fade-up">
        {/* Parfumeriya rasmi */}
        <div className="image-container">
          <img
            src={parfumImage} // Import qilingan parfumeriya rasm
            alt="Parfumeriya"
            className="about-image"
          />
          <div className="text-under-image">
            Do'konimiz
          </div>
        </div>

        {/* Ofis rasmi */}
        <div className="image-container">
          <img
            src={officeImage} // Import qilingan ofis rasmi 
            alt="Ofis"
            className="about-image" />
          <div className="text-under-image">
            Bizning ofis
          </div>
        </div>
      </div>

      {/* Manzil */}
      <div className="location" data-aos="fade-up" data-aos-delay="500">
        <h3>Bizning Manzilimiz</h3>
        <p>Vibe Parfumeriya va Kosmetika, 1234 Go'zallik Ko'chasida.</p>
      </div>
    </div>
  );
};

export default About;
