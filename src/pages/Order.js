"use client";
import { handleOrderSubmit, handlePayment, advanceOrderState } from "../services/orderService";

import React, { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import pizzaImages from '../data/pizzaImages';
import steps from '../data/steps';

import styles from "../styles/Order.module.css"
import style from "../styles/Components.module.css"



import OrderProgressTracker from "../components/layout/OrderProgressTracker";
import PizzaTypeSelector from "../components/order/PizzaTypeSelector";
import PizzaSizeSelector from "../components/order/PizzaSizeSelector";
import ToppingsSelector from "../components/order/ToppingsSelector";
import CustomerInfo from '../components/order/CustomerInfo';
import DeliveryMethodSelector from '../components/order/DeliveryMethodSelector';
import PaymentModal from '../components/order/PaymentModal';
import Card from '../components/order/Card';
import MobileMenuButton from '../components/common/MobileMenuButton';
import Header from '../components/common/Header';



function Order({setPage}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [pizzaType, setPizzaType] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [currentStep, setCurrentStep] = useState("choosing");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [orderId, setOrderId] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [step, setStep] = useState(0);
  const [order, setOrder] = useState([]);
  const [isCard, setIsCard] = useState(false);
  const [text, setText] = useState("Processing...")



 

  useEffect(() => {
    if (
      currentStep !== "choosing" &&
      currentStep !== "delivered" &&
      orderId !== null
    ) {
      const timer = setTimeout(() => {
        if (step < steps.length - 1) {
          setStep(step + 1);
          advanceOrderState(orderId, setCurrentStep, setStep, step)

        }
      }, 4500);
  
      return () => clearTimeout(timer);
    }
  }, [currentStep, orderId, step]);


  function updateCustomerName(value) {
    setCustomerName(value);
  }
  function updatePizzaType(value) {
    setOrderId(null)
    setPizzaType(value);
  }

  function updatePizzaSize(value) {
    setOrderId(null)
    setPizzaSize(value);
  }
  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function toggleTopping(value) {
    setOrderId(null)

    if (toppings.includes(value)) {
      setToppings(toppings.filter((item) => item !== value));
    } else {
      setToppings([...toppings, value]);
    }
  }

  function changeDeliverType(type){
    setDeliveryMethod(type)
    setOrderId(null)
  }


  return (
  <>
    <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
    <Header mobileMenuOpen={mobileMenuOpen} setPage={setPage} />
    <section className={styles.section}>
      <OrderProgressTracker steps={steps} currentStep={currentStep} />

      <header className={styles.headerContainer}>
        <h2 className={styles.title}>{currentStep ==="choosing" ? "Build Your Perfect Pizza" :`${steps[step]?.label}` }</h2>
        {currentStep ==="choosing" &&
        <p className={styles.subtitle}>
          Customise your pizza just the way you like it
        </p>
        }
        {currentStep ==="delivered" &&
        <p className={styles.subtitle}>
          Thank you for ordering with us
        </p>
        }
      </header>
      <Card data={order} showPaymentModal={setShowPaymentModal} isCard={isCard} setIsCard={setIsCard} />

     { currentStep === "choosing" && <form className={styles.formContainer}>

        <DeliveryMethodSelector
          selectedMethod={deliveryMethod}
          onSelect={(type)=>changeDeliverType(type)}
          />


        <CustomerInfo
          pizzaType={pizzaType}
          updateCustomerName={updateCustomerName}
          />
        <PizzaTypeSelector
          pizzaType={pizzaType}
          updatePizzaType={updatePizzaType}
        />

        <PizzaSizeSelector
          pizzaSize={pizzaSize}
          updatePizzaSize={updatePizzaSize}
        />

        <ToppingsSelector
          toppings={toppings}
          toggleTopping={toggleTopping}
          pizzaImages={pizzaImages}
        />

        
    {!orderId ? ( <button
        type="button"
         className={styles.orderButton}
         onClick={() =>
          handleOrderSubmit(
            {
              customerName,
              pizzaType,
              pizzaSize,
              toppings,
              deliveryMethod,
            },
            setOrder,
            setOrderId,
            setIsCard,
            setText,
            setIsLoading
          )
        }
          >
          Add to Order
        </button>
      ) : (
        <button
        type="button"
        className={styles.orderButton}
        onClick={() => setShowPaymentModal(true)}
        >
        {isLoading ? (
          <>
          <span className={style.spinner}></span> {text}
          </>
      ) : (
      
         "Continue to Payment method")}
        </button>
      
         
        )}


      </form>}

      {showPaymentModal && (
          <PaymentModal
            totalPrice={order.totalCost}
            onClose={() => setShowPaymentModal(false)}
            onPay={(method) => handlePayment(orderId, method, setIsCard, setText)}
            nextStage={()=>advanceOrderState(orderId, setCurrentStep, setStep, step)}
            text={text}
          />
        )}
      {currentStep === "preparing" && 
       <DotLottieReact
       src="https://lottie.host/10cc2ee6-14c0-48cb-a6f7-cffd7d899491/1krRDOepuD.lottie"
       loop
       autoplay
     />
    }
      {currentStep === "baking" && 
        <video width="750" height="500" autoPlay >
      <source  src="/media/baking.mov" type="video/mp4"/>
        </video>
    }
      {currentStep === "delivering" && 
        <DotLottieReact
        src="https://lottie.host/2f77a5f1-8a52-4f59-9ce9-086e7399d5e9/TpGjYWApsu.lottie"
        loop
        autoplay
      />
    }
      {currentStep === "delivered" && 
       <DotLottieReact
       src="https://lottie.host/a2874228-7037-431e-bf3e-4ea0366d0e82/uixyYwtcFr.lottie"
       loop
       autoplay
     />
    }
     
      
    </section>
   
    </>
  );

}

export default Order;
