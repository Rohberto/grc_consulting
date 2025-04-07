import { trackSynchronousRequestDataAccessInDev } from "next/dist/server/app-render/dynamic-rendering";

export const levels = [
    {
      id: "entry",
      label: "Entry Level",
      content: [
        {
          id: "entry1",
          title: "Security Awareness Analyst",
          description: "Learn to develop and implement effective security awareness programs that reduce human risk and strengthen cybersecurity culture. This course covers phishing prevention, social engineering, compliance frameworks (NIST, ISO, SOC 2), and behavioral security training. Ideal for those pursuing careers in cybersecurity awareness, compliance, and risk management, with preparation for CompTIA Security+ and SACP™ certifications.",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 99.98,
          completed: false
        },
        {
          id: "entry2",
          title: "Compliance Analyst",
          description: "Gain the skills to ensure regulatory compliance and manage risk frameworks like ISO 27001, NIST, SOC 2, and PCI DSS. This course covers policy development, audit processes, risk assessments, and legal requirements essential for maintaining security and compliance. Perfect for those pursuing careers in GRC, cybersecurity compliance, and risk management, with preparation for industry certifications like CompTIA Security+ and CISA.",
          lessons: 1.2,
          image: "/Assets/kid_group.png",
          price: 99.98,
          completed: false
        },
        {
          id: "entry3",
          title: "Little Cyber Heroes",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/adult_group.png",
          price: 98.88,
          completed: trackSynchronousRequestDataAccessInDev
        },
        {
          id: "entry4",
          title: "Third Party Risk Analyst",
          description: "Learn to assess, monitor, and manage third-party vendor risks to ensure compliance with NIST, ISO 27001, SOC 2, and PCI DSS. This course covers vendor risk assessments, contract security reviews, due diligence, and regulatory compliance to protect organizations from supply chain threats. Ideal for those pursuing careers in GRC, risk management, and cybersecurity compliance, with preparation for industry certifications like CTPRP and CRISC.",
          lessons: 1.2,
          image: "/Assets/teaching.png",
          price: 98.88,
          completed: false
        },
      ],
    },
    {
      id: "mid",
      label: "Mid-Level",
      content: [
        {
          id: "mid1",
          title: "Military Fundamentals Course",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/kid_learning.png",
          price: 98.88,
          completed: trackSynchronousRequestDataAccessInDev
        },
      
        {
          id: "mid2",
          title: "Transition and Leadership Training",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 98.88,
          completed: trackSynchronousRequestDataAccessInDev
        }
      ],
    },
    {
      id: "senior",
      label: "Senior-Level",
      content: [
        {
          id: "senior1",
          title: "Military Fundamentals Course",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/man_tech.png",
          price: 98.88,
          completed: trackSynchronousRequestDataAccessInDev
        },
        {
          id: "senior2",
          title: "Transition and Leadership training",
          description: "Engaging, hands-on courses that spark curiosity, creativity, and critical thinking through interactive play and fun learning experiences for kids",
          lessons: 1.2,
          image: "/Assets/tech_woman.png",
          price: 98.88,
          completed: trackSynchronousRequestDataAccessInDev
        },
      ],
    },
  ];