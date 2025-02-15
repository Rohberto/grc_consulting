import React from 'react';
import styles from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.statistics_container}>
    <h1>Key Statistics</h1>
    <div className={styles.statistic_container}>
        <div className={styles.statistic}>
            <h1>1331</h1>
            <p>cyber incidents targeting U.S. schools between 2016 and 2022, with a rise in incidents each year.</p>
        </div>
        <div className={styles.statistic}>
            <h1>25%</h1>
            <p>of middle and high school students in the United States reported being cyberbullied.</p>
        </div>
        <div className={styles.statistic}>
            <h1>91%</h1>
            <p>of children aged 10-15 use the internet daily in the U.S. However, many lack the understanding of what constitutes safe and ethical behavior online.</p>
        </div>
    </div>

    <img src="/Assets/fifth_left.png" className={styles.background_overlay_left} alt=''/>
        <img src="/Assets/fifth_right.png" className={styles.background_overlay_right} alt=''/>
      <div className={styles.wavy_image}>
        <img src="/Assets/wavy5.png" alt='wavy image'/>
      </div>
</div>
  )
}

export default Statistics