'use client';

import styles from './CareerDevelopment.module.css';
import { useRouter } from 'next/navigation';

const CareerDevelopment = () => {
    const router = useRouter();
const careerServices = [
    { title: 'GRC Discovery Call  (30mins)', description: 'Are you curious about Governance, Risk, and Compliance (GRC) but not sure where to start? Take the first step in exploring this exciting and growing field with our 15-Minute GRC Discovery Call', image: '/Assets/discovery.jpg', price: '30', list: ["A clear understanding of what GRC is and its importance.",
      "Insight into the career opportunities available in GRC.",
      "Answers to your specific questions about breaking into the industry.",
      "Guidance on certifications, skills, and pathways for beginners."] },
    { title: 'Career Advancement Consultation  (45mins)', description: 'Are you ready to elevate your career in Governance, Risk, and Compliance (GRC)? Whether you’re an entry-level professional starting your journey or a mid-level specialist seeking your next move, this tailored', image: '/Assets/consultation.png', price: '150', list: ["1:1 consultation is designed to help you break through to the next level."] },
    { title: 'GRC Resume', description: 'Is your resume ready to make an impact in the competitive world of Governance, Risk, and Compliance (GRC)? At ITGC, we specialize in transforming mediocre resumes into standout documents that capture the attention of hiring managers and recruiters.', image: '/Assets/resume.png', price: '200', list: ["Strategically tailor your resume for the specific GRC role you're targeting Highlight your most relevant skills and experiences"
      ,"Eliminate common mistakes that could be holding you back"
      ,"Create a compelling narrative that showcases your unique value proposition"
    ] },
    { title: 'Interview Preparation', description: 'Stressed about an upcoming interview? Feeling underprepared? Let ITG guide you to success. Leveraging our teams vast expertise, we will equip you with the knowledge and confidence needed to excel in your interview.', image: '/Assets/interview.png', price: '175', list: ["Proven tips to stand out as the ideal candidate",
      "A deep dive into frequently asked questions",
      "Personalized advice tailored to your specific role",
      "Confidence-building techniques for a calm, collected demeanor"] },

    { title: 'LinkedIn Optimization', description: 'Our LinkedIn Optimization Service for GRC Consulting Companies is designed to help you build a professional and engaging presence that attracts clients and establishes credibility. We optimize your company profile to highlight your governance, risk, and compliance expertise, showcase client success stories, and promote your unique value proposition. By enhancing visibility through tailored content strategies, keyword integration, and network engagement, we position your consulting firm as a trusted leader in the GRC industry, driving connections and growth opportunities.', image: '/Assets/linkedin.png', price: '150', list: ["Linkedin refresh to attract recruiters & hiring managers."] },
   
    { title: 'Comprehensive 3-month Roadmap ', description: 'At ITG GRC Consulting, we know that navigating the Governance, Risk, and Compliance (GRC) field can feel overwhelming. That’s why we’ve developed an actionable and comprehensive 3-Month Roadmap to help professionals like you confidently advance in your GRC career—no matter your starting point.', image: '/Assets/roadmap.jpg', price: '999', list: ["Monthly Educational & Training Resources", 
      "Monthly Communication & Checkpoints",
      "Access to GRC Digital Media Toolkit",
      "Personalized One-on-One Coaching Calls",
      "Certification Planning and Support"
    ] }
  ];
  
  const membershipPackages = [
    { title: 'Members Only Club', type: "standard", description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/membership.png', price: 'Free' },
    { title: 'Members Only Club', type:"premium", description: 'Get personalized guidance and expert insights to navigate challenges, make informed decisions, and achieve your goals with confidence.', image: '/Assets/membership.png', price: '$14.99' },
  ];
  return (
    <section className={styles.container}>

      <div className={styles.section} id="services">
        <h3>Career Services</h3>
        <div className={styles.grid}>
          {careerServices.map((service, index) => (
            <div key={index} className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.image} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <ul>
                {
                  service.list.map((list, key) => (
                    <li index={key}>{list}</li>
                  ))
                }
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
            <div key={index} className={`${styles.card} ${styles.membership_card}`} onClick={() => {router.push("/checkout")}}>
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


