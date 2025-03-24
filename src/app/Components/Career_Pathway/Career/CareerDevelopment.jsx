'use client';

import styles from './CareerDevelopment.module.css';
import { useRouter } from 'next/navigation';

const CareerDevelopment = () => {
    const router = useRouter();
const careerServices = [
    { title: 'Consultation', description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/consultation.png', price: '200', list: "1:1 Consultation" },
    { title: 'Resume Services 1', description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/resume.png', price: '200', list: "Resume Review" },
    { title: 'Resume Services 2', description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/resume2.png', price: '250', list: "Federal Resume Revision" },
    { title: 'Interview Preparation 1', description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/interview.png', price: '300', list: "1:1 Consultation" },
    { title: 'Interview Preparation 2', description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/interview2.png', price: '350', list: "GovTech GRC Role" },
    { title: 'LinkedIn Optimization', description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/linkedin.png', price: '150', list: "Linkedin refresh to attract recruiters & hiring managers." },
  ];
  
  const membershipPackages = [
    { title: 'Members Only Club', type: "standard", description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/membership.png', price: 'Free' },
    { title: 'Members Only Club', type:"premium", description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/membership.png', price: '$14.99' },
  ];
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Career Development Services</h2>
      <p className={styles.subtitle}>Elevate your career in governance, risk, and compliance with our expert Career Development
      Services. At ITG GRC, we provide tailored guidance, professional training, and certification
      preparation to help you excel in the ever-evolving GRC landscape. Whether you're an aspiring
      practitioner or currently an intermediate professional looking to advance, our services include,
      resume building, interview preparation, and access to exclusive industry insights. Unlock your
      potential and position yourself for success with career support designed to help you thrive in the
      world of GRC.</p>

      <div className={styles.section}>
        <h3>Career Services</h3>
        <div className={styles.grid}>
          {careerServices.map((service, index) => (
            <div key={index} className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.image} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <ul>
                <li>{service.list}</li>
              </ul>
              <span className={styles.price}>${service.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Membership Package</h3>
        <div className={styles.grid}>
          {membershipPackages.map((packageItem, index) => (
            <div key={index} className={styles.card} onClick={() => {router.push("/checkout")}}>
              <img src={packageItem.image} alt={packageItem.title} className={styles.image} />
             <div className={styles.label}>{packageItem.type}</div>
              <h4>{packageItem.title}</h4>
              <p>{packageItem.description}</p>
              <div className={styles.list_container}>
                <p>Free Membership</p>
                <ul>
                    <li>GRC Glossary & FAQs</li>
                    <li>Downloadable White Papers</li>
                    <li>GRC blog with regurlarly updated articles and insights.</li>
                </ul>
              </div>
              <div className={styles.list_container}>
                <p>Premium Membership</p>
                <ul>
                    <li>Everything Included Above.</li>
                    <li>GRC Job Opportunities Board.</li>
                    <li>Exclusive webinars with industry Experts.</li>
                </ul>
              </div>
              <div className={styles.list_container}>
                <p>ITG Learning academy graduates</p>
                <ul>
                    <li>ITG Job Opportunities Board</li>
                </ul>
              </div>
              <span className={styles.price}>{packageItem.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CareerDevelopment;


