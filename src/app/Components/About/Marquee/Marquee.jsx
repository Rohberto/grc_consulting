import React from "react";
import styles from "./Marquee.module.css";

const MarqueeSection = () => {
  const items = [
    {
      header: "Data Breach Costs",
      item: "According to IBM, the average data breach now costs around $4.35million."
    },
    {
      header: "Rising CyberCrime",
      item: "Cybersecurity ventures projects thatcybercrime will cost the world $10.5 tillion annually by 2025."
    },
    {
      header: "Human ELement",
      item: "Studies show that nearly 95% of cybersecurity breaches involves human error"
    },
    {
      header: "Phishing Prevalence",
      item: "Over 80% of organizations report experiencing phishing attacks, underscoring the need of robust GRC strategies"
    },
    {
      header: "GRC Impact",
      item: "Organizations with a strong GRC framework can reduce risk exposure by up to 50%"
    },
    {
      header: "Small Business Vulnerability",
      item: "Approximately 60% of small business close within six months after a major cyber attack"
    },
    {
      header: "Training Benefits",
      item: "Effective cybersecurity training can cut security incidents by as much as 70%"
    },
    {
      header: "Automation Savings",
      item: "Automating GRC processes can lower compliance costs by around 30% and accelerate reporting."
    },
    {
      header: "Strategy Gaps",
      item: "Nearly 68% of organizations admit that not having a formal GRC strategy limits their digital innovation."
    },
    {
      header: "Cloud Risks",
      item: "About 53% of breaches now involve cloud misconfigurations, hihlighting emerging risks in digital environments."
    }
   
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.top_text}>
                <img src="/Assets/about_logo.png" alt="marquww logo"/>
                <h1>{item.header}</h1>
                </div>
              
              <p>{item.item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.marquee} ${styles.reverse}`}>
        <div className={styles.marqueeContent}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
                 <div className={styles.top_text}>
                <img src="/Assets/about_logo.png" alt="marquww logo"/>
                <h1>{item.header}</h1>
                </div>

              <p>{item.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
