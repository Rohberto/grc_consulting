import Image from "next/image";
import styles from "./GRCTraining.module.css";

const GRCTraining = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Empowering Organizations <br/> with Tailored GRC Training <br/> for Success</h1>
        <p>
          Reach out now and discover how our expertise can help you <br/> achieve compliance and manage risks effectively.
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