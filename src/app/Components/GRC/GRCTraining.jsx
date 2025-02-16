import Image from "next/image";
import styles from "./GRCTraining.module.css";

const GRCTraining = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Empowering Organizations <br/> with Tailored GRC Training <br/> for Success</h1>
        <p>
          ITG GRC provides comprehensive GRC training solutions to equip employees with the skills needed to mitigate risks, ensure compliance and enhance cybersecurity. Our customized corporate training programs educate employees at all levels, fostering a well-informed and security-conscious workforce.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/Assets/training.png" alt="GRC Training" width={500} height={300} className={styles.image} />
      </div>
    </section>
  );
};

export default GRCTraining;