import styles from "./Certifications.module.css";

const Certifications = () => {
  return (
    <section className={styles.certificationsSection}>
       
       <div className={styles.certification_content}>
            <div className={styles.certification_text_content}>
                <h1>Recognized Excellence.<br/>Certified Expertise.<br/> Proven Quality.</h1>
            <p>Our certifications reflect our unwavering commitment to quality, compliance, and industry leadership. They underscore the trust we’ve built through our expertise and dedication, showcasing our drive to exceed expectations and deliver excellence in everything we do.</p>
            </div>

            <div className={styles.certification_images}>
                <img src="/Assets/isc.png" alt="ISC" />
                <img src="/Assets/purple.png" alt="Purple" />
                <img src="/Assets/comptia.png" alt="comptia" />
            </div>
        </div>

        <div className={styles.statistics_container}>
            <h1>Key Statistics</h1>
            <div className={styles.statistic_container}>
                <div className={styles.statistic}>
                    <h1>58%</h1>
                    <p>Of GRC professionals report that certifications 
                        (have been essential to their career progression.</p>
                </div>
                <div className={styles.statistic}>
                    <h1>68%</h1>
                    <p>Of GRC professionals report that certifications 
                        (have been essential to their career progression.</p>
                </div>
                <div className={styles.statistic}>
                    <h1>35%</h1>
                    <p>Of GRC professionals report that certifications 
                        (have been essential to their career progression.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Certifications;

