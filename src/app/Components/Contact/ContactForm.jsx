import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
         <button className={styles.tag}>Contact Us</button>
      <h2>Solution is a Message Away</h2>
      <div className={styles.formContainer}>
        <h3>Get in Touch</h3>
        <p className={styles.reach}>You can reach us any time</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone number" required />
          <textarea placeholder="Write your message here..." required></textarea>
          
          <h4>Select Services You Need</h4>
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" /> <span className={styles.label}> Business & Corp Services </span></label>
            <label><input type="checkbox" /> <span className={styles.label}> Government Services </span></label>
            <label><input type="checkbox" /> <span className={styles.label}>Training for Organizations </span></label>
            <label><input type="checkbox" /> <span className={styles.label}> Other </span></label>
          </div>
          
          <button type="submit" className={styles.submitButton}>Submit</button>
          <p className={styles.terms}>By contacting us, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
