"use client";
import styles from "./Solutions.module.css";
import Image from "next/image";

const BusinessSolutions = () => {
    const solutions = [
        { title: "Security Education & Awareness", description: "Focused on creating a security-conscious culture within the organization by training employees on cybersecurity best practices, phishing awareness, and regulatory requirements.", ideal: " Organizations of all sizes looking to reduce the risk of human error and insider threats."},
        { title: "Policy Management", description :"Development, implementation, and management of corporate policies to ensure compliance with regulations and internal standards.", ideal: "Organizations needing to streamline policy management processes and maintain up-to-date documentation to meet regulatory requirements." },
        { title: "Compliance Management", description: "Ensures adherence to industry-specific regulations and standards, minimizing the risk of penalties and reputational damage.", ideal: "Organizations in highly regulated industries (e.g., healthcare, finance) or those aiming for international market expansion.", industry: " GDPR, HIPAA SOX. PCI-DSS, ISO 27001 NIST and more." },
        { title: "Data Privacy & Protection", description: "Aimed at ensuring the protection of sensitive information and compliance with global data privacy regulations.", ideal: "Companies handling sensitive personal information, particularly those required to comply with data privacy laws like GDPR, CCPA & TDPSA." },
        { title: "Incident Response and Business Continuity", description: "Prepares organizations to ensure business operations can continue or recover quickly in response to security incidents, data breaches, and other disruptions to maintain business operations", ideal: "Medium to large corporations, particularly those with complex IT infrastructures or those prone to cyber incidents and natural disasters." },
        { title: "Internal Audit & Assurance", description: "Provides internal audits of business operations, processes, and controls to ensure adherence to internal policies and regulatory requirements", ideal:"Large corporations needing independent reviews of their governance, risk, and compliance frameworks."}
      ];
      
      const riskPrograms = [
        { title: "Third-Party Risk Management", description: "A structured program designed to help organizations assess, monitor, and mitigate risks associated with their vendors and external partners.", ideal: " Large corporations needing independent reviews of their governance, risk, and compliance frameworks." },
        { title: "Risk Assessment & Management", description: "A structured approach to identify, assess, and prioritize risks, with strategies for mitigation and monitoring.", ideal: "Businesses seeking a proactive approach to identifying and managing risks, especially medium and large corporations with complex risk profiles." },
      ];

      const Government = [
        {title: "Education & Training Programs", description: "At ITG GRC, we provide an exceptional opportunity to elevate your skills and advance your career with industry-recognized certifications and professional training. Through our esteemed partnerships with leading organizations like CompTIA and ISC2, we ensure you gain access to high-quality programs designed to meet the demands of the ever-evolving tech and cybersecurity landscape."},
        {title: "Risk & Compliance Solutions", description: "We offer a comprehensive suite of Risk a Compliance solutions for government agencies such as:", list: ["Risk Management",
            "Compliance Management",
            "Security Awareness Program"]},
        {title: "Employment Opportunities", description: "Upon successful completion of an IT G Learning academy program, students are able to apply to GovTech opportunities within ITG."},
        {title: "Government Contracting", description: "ITG presents numerous advantages and gives students the chance to apply for government contract opportunities within some of the top Federal, state and local agencies."}
      ]
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Business Solutions</h2>
      <p className={styles.subtitle}>
        At ITG GRC Consulting, we help businesses ensure compliance, mitigate risks, and strengthen governance with tailored solutions.
      </p>
      <div className={styles.grid}>
        {solutions.map((solution, index) => (
          <div key={index} className={styles.card}>
            <div clssName={styles.icon}><Image src="/Assets/solution_logo.png" alt="icon" width={40} height={40} /></div>
            <h3 className={styles.cardTitle}>{solution.title}</h3>
            <p className={styles.cardText}>{solution.description}</p>
            {
                solution.industry && (
                    <p className={styles.cardIdeal}><span className={styles.ideal_colored}>Industry-Specific Compliance:</span> {solution.industry}</p>
                )
            }
            <p className={styles.cardIdeal}><span className={styles.ideal_colored}>Ideal For:</span> {solution.ideal}</p>
          </div>
        ))}
      </div>
      <h3 className={styles.sectionTitle}>Risk Management Programs</h3>
      <div className={styles.grid}>
        {riskPrograms.map((program, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}><Image src="/Assets/solution_logo.png" alt="icon" width={40} height={40} /></div>
            <h3 className={styles.cardTitle}>{program.title}</h3>
            <p className={styles.cardText}>{program.description}</p>
            <p className={styles.cardIdeal}><span className={styles.ideal_colored}>Ideal For:</span> {program.ideal}</p>
          </div>
        ))}
      </div>

<div className={styles.government_section}>
      <h2 className={styles.title}>Government Services</h2>
      <p className={styles.subtitle}>
      At ITG GRC Consulting, we help businesses ensure compliance, mitigate risks, and strengthen governance with tailored solutions.
      </p>

      <div className={styles.government_grid}>
        {Government.map((government, index) => (
          <div key={index} className={styles.card}>
            <div clssName={styles.icon}><Image src="/Assets/solution_logo.png" alt="icon" width={40} height={40} /></div>
            <h3 className={styles.cardTitle}>{government.title}</h3>
            <p className={styles.cardText}>{government.description}</p>
            {
                government.list && (
                  <ul>
                    {
                        government.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                  </ul>
                )
            }
           
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};



export default BusinessSolutions;
