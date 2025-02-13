import styles from "./cybersecurity.module.css";

const CybersecurityConsultant = () => {
  return (
    <section className={styles.container}>
      <h2>Cybersecurity Consultant</h2>
    
    <div className={styles.content_container}>
        <div className={styles.consultation}>
            <p>Average Salary</p>
            <h1>$123,456</h1>
            <div className={styles.salary_image}>
                <span>cybersecurity <br/>Consultation</span>
                <img src="/Assets/salary-chart.png" alt="salary chart"/>
            </div>
        </div>

        <div className={styles.job_title}>
            <p>Common Job Title</p>
            <ul>
            <li className={styles.listItem}>Cybersecurity Consultant</li>
            <li className={styles.listItem}>Security Consultant</li>
            <li className={styles.listItem}>Cyber Analyst</li>
            <li className={styles.listItem}>Information Security Consultant</li>
            </ul>
        </div>

        <div className={styles.request_education}>
            <p>Request Education</p>
            <div className={styles.degree_image_container}>
                <img src="/Assets/degree.png"  alt="degree"/>
            </div>
        </div>

        <div className={styles.consultation}>
            <p>Average Salary</p>
            <h1>$123,456</h1>
            <div className={styles.salary_image}>
                <span>cybersecurity <br/>Consultation</span>
                <img src="/Assets/payment-evaluation.png" alt="salary chart"/>
            </div>
        </div>

        <div className={styles.skills}>
            <div className={styles.column}>
                <h1>Skills</h1>
                <h1 className={styles.right}>5 year Projected Growth</h1>
            </div>
            <div className={styles.column}>
                <p>Security foundation & threat Intelligence</p>
                <p className={styles.right} >164%</p>
            </div>
            <div className={styles.column}>
                <p>Cloud Security</p>
                <p  className={styles.right}>130%</p>
            </div>
            <div className={styles.column}>
                <p>Preventative Antivirus</p>
                <p  className={styles.right}>76%</p>
            </div>
            <div className={styles.column}>
                <p>Cloud Access Security Broker (CASB) Management</p>
                <p  className={styles.right}>69%</p>
            </div>
            <div className={styles.column}>
                <p>Enterprise Mission Assurance Support Service</p>
                <p  className={styles.right}>65%</p>
            </div>
        </div>

        <div className={styles.framework}>
        <h4 className={styles.subheading}>Common Cybersecurity Vulnerabilities Framework Categories</h4>
          <select className={styles.dropdown}>
            <option>Design & Development</option>
            <option>Network Security</option>
            <option>Application Security</option>
            <option>Incident Management</option>
          </select>
          <select className={styles.dropdown}>
            <option>Protection & Defense</option>
            <option>Network Security</option>
            <option>Application Security</option>
            <option>Incident Management</option>
          </select>
          <select className={styles.dropdown}>
            <option>Oversight & Governance</option>
            <option>Network Security</option>
            <option>Application Security</option>
            <option>Incident Management</option>
          </select>
          <select className={styles.dropdown}>
            <option>Cyberspace Effects</option>
            <option>Network Security</option>
            <option>Application Security</option>
            <option>Incident Management</option>
          </select>
        </div>

        <div className={styles.job_title}>
            <p>Top Certifications Required</p>
            <ul>
            <li className={styles.listItem}>Certified Information Systems Security Professional </li>
            <li className={styles.listItem}>Certified Information System Auditor (CISA)</li>
            <li className={styles.listItem}>Certified Information Security Manager</li>
            <li className={styles.listItem}>Certified Ethical Hacker</li>
            <li className={styles.listItem}>GIAC Certifications</li>
            </ul>
        </div>

        <div className={styles.job_title}>
            <p>Top Skills Required</p>
            <ul>
            <li className={styles.listItem}>Cybersecurity</li>
            <li className={styles.listItem}>Computer Science</li>
            <li className={styles.listItem}>Identity Access Management</li>
            <li className={styles.listItem}>Vulnerability</li>
            <li className={styles.listItem}>Authentications</li>
            <li className={styles.listItem}>Microsoft Azure</li>
            <li className={styles.listItem}>Project Management</li>
            <li className={styles.listItem}>Cloud Security</li>
            <li className={styles.listItem}>Incident Response</li>
            </ul>
        </div>

    </div>
    </section>
  );
};

export default CybersecurityConsultant;
