import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Paypal from "../assets/images/Paypal.svg";
import Visa from "../assets/images/Visa.svg";
import MasterCard from '../assets/images/Mastercard.svg';
import Amex from "../assets/images/Amex.svg";
import "../assets/css/checkout.css";
import confident from "../assets/images/confident.svg";
import Summary from "../components/Summary";




const Simon = [
  { imgSrc: confident, span: "Lorem ipsum dollar...", paragraph: "adipising elit, sed do eiusmod tempor", dollar: "24.69"},
  { imgSrc: confident, span: "Lorem ipsum dollar...", paragraph: "sed do eiusmod tempor adipising elit", dollar: "34.69"},
];

function Checkout(props) {
  const cardTypes = [
    { src: Paypal, alt: "Paypal" },
    { src: MasterCard, alt: "MasterCard"   },
    { src: Amex, alt: "American Express" },
    { src: Visa, alt: "Visa" },

  ];
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
 
    if (name === "cardNumber") {
      let formattedValue = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value.toUpperCase()
      });
    }
  };
  

  const handleExpirationDate = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    e.target.value = value;
  };
  const handleNumber = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
     
    e.target.value = value;
  }
  const validateForm = () => {
    let newErrors = {};

    // Validate Card Number (Must be 16 digits)
    if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    // Validate Expiration Date (Must be MM/YY)
    if (!/^(0[1-9]|1[0-2])\/([2-9][0-9])$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Enter a valid MM/YY date";
    }

    // Validate CVC (Must be 3 or 4 digits)
    if (formData.cvc.length < 3 || formData.cvc.length > 4) {
      newErrors.cvc = "CVC must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Exit the function if the form is not valid
    }
    console.log(formData);
    setFormData({
      nameOnCard: "",
      cardNumber: "",
      expirationDate: "",
      cvc: ""
    });
    // alert("Payment Successful!");

  };
  return (
    <div>
      <Nav />
      <main>
        <div id="first-main">
          <div id="payment">
            <p className='real'>Checkout</p>
            <div id="card">
              <p className="real-p">Card type</p>
              <div className="card-container">
                {cardTypes.map((card, index) => (
                  <div key={index} className="card-item">
                    <img src={card.src} alt={card.alt}  style={{ width: '100px', height:"50px" }}/>
                  </div>
                ))}
              </div>
              <form action="" method="post" onSubmit={handleSubmit}>
                <label htmlFor="nameOnCard" className="real-p">Name on Card</label>
                <input type="text" name="nameOnCard" id="nameOnCard" placeholder="Enter name on Card"   value={formData.nameOnCard}
                  onChange={handleInputChange} required />
                <label htmlFor="cardNumber" className="real-p">Card Number</label>
                <input type="text" name="cardNumber" id="cardNumber"  placeholder="Enter Card Number"   value={formData.cardNumber}
                  onChange={handleInputChange}  inputMode="numeric" maxLength="19"   onInput={handleNumber} required/>
                                  {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

                <section id="card-info">

                
                  <div>
                  <label htmlFor="expirationDate" className="real-p">Expiration Date ( MM/YY )</label>
                  <input type="text" name="expirationDate" id="expirationDate" placeholder="Enter Expiration Date (MM/YY)"   value={formData.expirationDate}
                      onChange={handleInputChange}     maxLength="5"
                      onInput={handleExpirationDate}  required/>
                            {errors.expirationDate && <p className="error">{errors.expirationDate}</p>}

                  <div id="box">
                  <input type="checkbox" name="" id="check-box" />
                  <p className="save">Save my information for faster checkout</p>

                  </div>
                    
                  </div>
                  <div>
                  <label htmlFor="cvc" className="real-p">CVC</label>
                  <input type="text" name="cvc" id="cvc" placeholder="Enter CVC"   value={formData.cvc}
                      onChange={handleInputChange}  inputMode="numeric" maxLength="4"  onInput={handleNumber}  required />
                            {errors.cvc && <p className="error">{errors.cvc}</p>}

                  </div>
                </section>
                <button type="submit" id="submit" >Confirm Payment</button>
              </form>
            </div>
          </div>
          <div id="blue-pay">
            <p id="sum">Summary</p>
   {Simon.map((show, index) => (
          <Summary
            key={index}
            imgSrc={show.imgSrc}
            paragraph={show.paragraph}
            dollar={show.dollar}
            skin={show.span}
           />
        ))}
        <div>
          <section>
          <p> Total Amount</p>
          <p>&#36;51.38</p>
         </section>
         <section>
          <p> Coupon Discount</p>
          <p>0&#x25;</p>
         </section>
         <section>
          <p> TAX</p>
          <p>5</p>
         </section>
         <section>
          <p> Total</p>
          <p>&#36;56.38</p>
         </section>
        </div>
          </div>
        </div>
        <div id="second-main">
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
