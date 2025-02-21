import React from "react";
import styles from "./Checkout.module.css";
import {FaCreditCard} from "react-icons/fa";

export default function CheckoutPage() {
  return (
    <div className={styles.checkoutContainer}>
      {/* Left Section: Billing Details */}
      <div className={styles.leftSection}>
        <h2 className={styles.sectionTitle}>Billing details</h2>
        <form className={styles.billingForm}>
          <label className={styles.formLabel}>
            First name
            <input type="text" placeholder="Sharmin" className={styles.formInput} />
          </label>
          <label className={styles.formLabel}>
            Last name
            <input type="text" placeholder="Tithi" className={styles.formInput} />
          </label>
          <label className={styles.formLabel}>
            Email address
            <input
              type="email"
              placeholder="name@example.com"
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            Phone number
            <input type="tel" placeholder="0123456789" className={styles.formInput} />
          </label>
          <label className={styles.formLabel}>
            Country / Region
            <select className={styles.formSelect}>
              <option value="US">United States (US)</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
          </label>
        </form>
      </div>

      {/* Right Section: Order Summary */}
      <div className={styles.rightSection}>
        <div className={styles.orderBox}>
          <h2 className={styles.sectionTitle}>Your Order</h2>
          <div className={styles.orderRow}>
            <span>IT &amp; Cybersecurity Foundations Career Path</span>
            <span>$88.88</span>
          </div>
          <div className={styles.order_row}>
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className={styles.order_row}>
            <span>subtotal</span>
            <span>$88.88</span>
          </div>
          <div className={styles.totalPrice}>
            <span>Total Price</span>
            <span>$88.88</span>
          </div>
        </div>

        <div className={styles.paymentBox}>
          <h3 className={styles.sectionSubtitle}>Payment Method</h3>
          <p className={styles.paymentLabel}><FaCreditCard/> Pay with card</p>

          <div className={styles.inputBox}>
            <p>Enter Your card number</p>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className={styles.cardInput}
          />
          </div>
          <p className={styles.footer_form_text}>We collect and use your personal information to process your course enrollment, provide personalized support for your learning journey, ensure secure transactions, and for other purposes detailed in our privacy policy.</p>
          <button className={styles.placeOrderButton}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
