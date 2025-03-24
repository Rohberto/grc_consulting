import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container} id="contact">
         <button className={styles.tag}>Contact Us</button>
      <h2>Join The ITG Digital Defenders Today</h2>
      <div className={styles.formContainer}>
        <h3>Get in Touch</h3>
        <p className={styles.reach}>Ready to empower your students, enhance your curriculum, and safeguard your
community’s digital future? The ITG Digital Defenders Program is your gateway to a
safer, smarter online experience.</p>
<br/>
<p className={styles.reach}>For more information or to speak with a program advisor, contact us at
<a href="mailto:DigitalDefenders@itggrc.com"> DigitalDefenders@itggrc.com</a></p>
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

      <img src="/Assets/sixth_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/sixth_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy_7.png" alt='wavy image'/>
      </div>
    </section>
  );
};

export default ContactForm;
