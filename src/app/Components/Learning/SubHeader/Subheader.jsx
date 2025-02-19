import React from 'react';
import styles from "./SubHeader.module.css"

const Subheader = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subheader_text}>
            <p>“Did you know special funding exists to cover the cost of live or self-paced courses like these?”</p>
        </div>

        <div className={styles.subheader_button}>
            <button>Check Your Elgibility</button>
        </div>
    </div>
  )
}

export default Subheader;