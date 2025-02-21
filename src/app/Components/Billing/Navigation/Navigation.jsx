"use client"
import React from 'react';
import styles from "./Navigation.module.css";
import {usePathname} from "next/navigation";

const Navigation = () => {
  return (
    <div className={styles.navigation_container}>
        <h1 className={styles.navigation_header}>
            Checkout
        </h1>

        <p className={styles.navigation_links}> Home / Learning / <span className={styles.navigation_link}>career_pathway</span></p>
    </div>
  )
}

export default Navigation