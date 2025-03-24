import styles from "./Footer.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import Link from "next/link";
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
          <li className={styles.header_link}><Link href="/">Home</Link></li>
            <li className={styles.header_link}><Link href="/about">About Us</Link></li>
            <li className={styles.header_link}><Link href="/career_pathway">Career Pathway</Link></li>
            <li className={styles.header_link}><Link href="/kids">Kids Center</Link></li>
            <li className={styles.header_link}><Link href="/learning">Learning</Link></li>
            <li className={styles.header_link}><Link href="/consulting">Consulting</Link></li>
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
            <li><FaPhone className={styles.touch_icons}/> 281-746-1351</li>
            <li><FaMapMarkerAlt className={styles.touch_icons}/>15210 Spring Cypress Rd, STE K #1027 ,Cypress, TX 77429</li>
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
          <a href="https://www.facebook.com/ITG GRC Consulting" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
          </a>
          <a href="https://x.com/ITGGRC" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
          </a>
          <a href="https://www.instagram.com/itggrcconsulting" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
          </a>
          
       
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
