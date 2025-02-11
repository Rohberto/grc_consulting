import styles from "./Footer.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <img src="/Assets/Logo.png" alt="ITG GRC" />
        </div>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your email here" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.linksSection}>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>GRC Solutions</li>
            <li>Career Development</li>
            <li>Compliance Solutions</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>Compliance Services</li>
            <li>ITG Learning Academy</li>
            <li>Career Development</li>
            <li>Government Contracts</li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul>
            <li><FaEnvelope className={styles.touch_icons}/> info@itggrc.com</li>
            <li><FaPhone className={styles.touch_icons}/> (202) 456-7890</li>
            <li><FaMapMarkerAlt className={styles.touch_icons}/> 123 Main Street, Suite 200, New York, NY 10016</li>
          </ul>
        </div>
        <div>
          <h4>Certification</h4>
          <ul>
            <li> <img src="/Assets/check.svg" alt="check"/>The International Information System Security Certification Consortium</li>
            <li> <img src="/Assets/check.svg" alt="check"/>ITG Learning Certified Security Awareness Professional</li>
            <li><img src="/Assets/check.svg" alt="check"/> Consulting Technology Industry Association (CompTIA)</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>&copy; ITG GRC Consulting, 2024. All Rights Reserved.</p>
       
        <div className={styles.bottomGroup}>
        <p>Terms of Service | Privacy Policy</p>

        <div className={styles.socialIcons}>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
