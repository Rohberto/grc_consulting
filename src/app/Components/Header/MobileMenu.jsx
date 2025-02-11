"use client"
import { useState } from "react";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Hamburger / Close Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.menuButton}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <nav>
          <ul>
            <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Career Pathways</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Kids Center</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Learning</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Consulting</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Government Services</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
