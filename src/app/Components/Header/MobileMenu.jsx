"use client"
import { useState } from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";

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
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/career_pathway" onClick={() => setIsOpen(false)}>Career</Link></li>
            <li><Link href="/kids" onClick={() => setIsOpen(false)}>Kids Center</Link></li>
            <li><Link href="/learning" onClick={() => setIsOpen(false)}>Learning</Link></li>
            <li><Link href="/consulting" onClick={() => setIsOpen(false)}>Consulting</Link></li>
            <li><Link href="/government_services" onClick={() => setIsOpen(false)}>Government Services</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
