import styles from "./DigitalDefenders.module.css";

const DigitalDefenders = () => {
  return (
    <section className={styles.defendersSection}>
      <div className={styles.container}>
        {/* Left Side - Images */}
        <div className={styles.imageContainer}>
          <img src="/Assets/kid1.png" alt="Kid Learning" className={styles.largeImage} />
          <img src="/Assets/kid2.png" alt="Kid on Laptop" className={styles.smallImage} />
        </div>

        {/* Right Side - Text */}
        <div className={styles.textContainer}>
          <span className={styles.tag}>For Kids</span>
          <h2 className={styles.heading}>ITG Digital Defenders</h2>
          <p className={styles.description}>
            Empowering individuals and organizations to excel in cybersecurity by providing
            comprehensive learning opportunities, tailored solutions, and expert-led guidance to
            build strong digital defenses and ensure success in the modern online world.
          </p>

          {/* Features */}
          <ul className={styles.features}>
            <li><strong>Online Learning:</strong> Self-paced courses with videos, quizzes, and forums.</li>
            <li><strong>Customized Training:</strong> Tailored programs for schools and organizations.</li>
            <li><strong>In-Person Workshops:</strong> Expert-led sessions for schools and community centers.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalDefenders;
