import React, { useEffect } from "react";
import AOS from "aos";
import "./about.css"
import "aos/dist/aos.css"; // AOS CSS-ni import qilish

const About = () => {
  // AOS-ni boshlash
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi
      easing: "ease-out", // Animatsiya effekti
    });
  }, []);

  return (
    <div className="about-container">
      <h1 data-aos="fade-up">Vibe Do'koni Haqida</h1>
      <p data-aos="fade-left">
        <strong>Vibe</strong> - bu sifatli va zamonaviy mahsulotlar bilan mijozlarga yuqori xizmat ko'rsatishni maqsad qilgan do'kon. Bizning do'konimizda parfumlar, kosmetik vositalar va boshqa mahsulotlar mavjud bo'lib, har bir mahsulot maxsus sinovdan o'tgan va eng yuqori sifatga ega. Mahsulotlarimiz mijozlarimizning ehtiyojlariga mos ravishda tayyorlangan va ularning har biriga yuqori qiymat qo'shadi.
      </p>
      <p data-aos="fade-right">
        Bizning asosiy maqsadimiz - mijozlarga faqatgina ajoyib mahsulotlarni taklif qilish emas, balki ularni eng yaxshi xizmat bilan ta'minlashdir. Do'konimizda sizning ehtiyojlaringizga mos keladigan har bir narsani topishingiz mumkin. Har bir mahsulot bizning do'konimizga kelgan har bir mijozning ishonchini qozonish uchun tasdiqlangan.
      </p>
      <p data-aos="fade-up">
        Bizning assortimentimizda nafaqat klassik parfumlar, balki zamonaviy va o'ziga xos turli xil kosmetik vositalar ham mavjud. Biz mijozlarimizni quvontirishni va ularga eng yaxshi xizmat ko'rsatishni maqsad qilganmiz. Vibe - bu nafaqat do'kon, balki sizning go'zalligingiz va nafasingizni kashf qilishingiz uchun ajoyib joydir.
      </p>
      <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      Bizning instagram saytimiz
</p>
    </div>
  );
};

export default About;
