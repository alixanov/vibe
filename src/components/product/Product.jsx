import React, { useEffect, useState } from 'react';
// import axios from "axios";
import "./product.css"
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/2c551d7065d7a915de047e3fb37f9dcd.png'
import four from '../../assets/man.png'
import five from '../../assets/general.png'

const Product = () => {
  return (
    <div className="container">
      <div className="container__one">
        <div className="container__one-pictures">
          <img src={one} alt="/" className='about-imag next-one' />
        </div>
        <h1>Nomi: Tonal krem</h1>
        <h2>Narxi: 10$</h2>
      </div>
      <div className="container__two">
        <div className="container__two-pictures">
          <img src={two} alt="/" className='about-imag next next-two' />
        </div>
        <h1>Nomi: Tonal krem</h1>
        <h2>Narxi: 10$</h2>
      </div>
      <div className="container__three">
        <div className="container__three-pictures">
          <img src={three} alt="/" className='about-imag next-three' />
        </div>
        <h1>Nomi: Tonal krem</h1>
        <h2>Narxi: 10$</h2>
      </div>
      <div className="container__four">
        <div className="container__four-pictures">
          <img src={four} alt="/" className='about-imag next-four' />
        </div>
        <h1>Nomi: Tonal krem</h1>
        <h2>Narxi: 10$</h2>
      </div>
      <div className="container__five">
        <div className="container__five-pictures">
          <img src={five} alt="/" className='about-imag next-five' />
        </div>
        <h1>Nomi: Tonal krem</h1>
        <h2>Narxi: 10$</h2>
      </div>
    </div>
  )
}

export default Product