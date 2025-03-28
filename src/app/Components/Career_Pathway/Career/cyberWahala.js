"use client";

import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone";
import "vis-network/styles/vis-network.css";
import Tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const CyberChart = () => {
  const containerRef = useRef(null);
  const networkRef = useRef(null);
  const tippyInstanceRef = useRef(null);
  const isNetworkInitialized = useRef(false); // Track network initialization state

  // State to track container dimensions, Tippy status, and mobile modal
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [width, setWidth] = useState(0);
  const [isTippyOpen, setIsTippyOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // For mobile modal
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 }); // Default position

  // Nodes with manual x, y coordinates for precise positioning
  const baseNodes = [
    { id: "central_consultant", label: "Cybersecurity Consultant", group: "central", x: 100, y: 0, size: 40, title: "Central Role" },
    // Nontech Feeder Roles
    { id: "feeder_medical", label: "Medical/Health Services", group: "feeder", x: -400, y: -200, title: "Nontech Feeder Role" },
    { id: "feeder_legal", label: "Legal/Paralegal", group: "feeder", x: -400, y: -120, title: "Nontech Feeder Role" },
    { id: "feeder_project_mgmt", label: "Project Management", group: "feeder", x: -400, y: -40, title: "Nontech Feeder Role" },
    { id: "feeder_retail", label: "Retail & Customer Service", group: "feeder", x: -400, y: 40, title: "Nontech Feeder Role" },
    { id: "feeder_military", label: "Military/Law Enforcement", group: "feeder", x: -400, y: 120, title: "Nontech Feeder Role" },
    { id: "feeder_trades", label: "Trades & Operations", group: "feeder", x: -400, y: 200, title: "Nontech Feeder Role" },
    { id: "feeder_food", label: "Food Services & Hospitality", group: "feeder", x: -400, y: 280, title: "Nontech Feeder Role" },
    { id: "feeder_finance", label: "Finance & Banking", group: "feeder", x: -400, y: 360, title: "Nontech Feeder Role" },
    { id: "feeder_hr", label: "HR & Corporate Training", group: "feeder", x: -400, y: 440, title: "Nontech Feeder Role" },
    // Entry-Level Roles
    { id: "entry_grc_analyst", label: "GRC Analyst", group: "entry", x: -150, y: -150, title: "Entry-Level Role" },
    { id: "entry_sec_compliance_analyst", label: "Security Compliance Analyst", group: "entry", x: -150, y: -50, title: "Entry-Level Role" },
    { id: "entry_risk_compliance_assoc", label: "Risk & Compliance Associate", group: "entry", x: -150, y: 50, title: "Entry-Level Role" },
    { id: "entry_it_auditor", label: "IT Auditor", group: "entry", x: -150, y: 150, title: "Entry-Level Role" },
    { id: "entry_privacy_coord", label: "Privacy & Data Protection Coordinator", group: "entry", x: -150, y: 250, title: "Entry-Level Role" },
    { id: "entry_third_party_coord", label: "Third-Party Risk Coordinator", group: "entry", x: -150, y: 350, title: "Entry-Level Role" },
    { id: "entry_sec_training_specialist", label: "Security Awareness & Training Specialist", group: "entry", x: -150, y: 450, title: "Entry-Level Role" },
    // Mid-Level Roles
    { id: "mid_risk_mgmt_analyst", label: "Risk Management Analyst", group: "mid", x: 100, y: -200, title: "Mid-Level Role" },
    { id: "mid_sec_compliance_mgr", label: "Security Compliance Manager", group: "mid", x: 100, y: -100, title: "Mid-Level Role" },
    { id: "mid_cyber_policy_analyst", label: "Cybersecurity Policy Analyst", group: "mid", x: 100, y: 0, title: "Mid-Level Role" },
    { id: "mid_third_party_assessor", label: "Third-Party Risk Assessor", group: "mid", x: 100, y: 100, title: "Mid-Level Role" },
    { id: "mid_privacy_analyst", label: "Privacy Analyst (GDPR, CCPA, HIPPA, PCI-DSS)", group: "mid", x: 100, y: 200, title: "Mid-Level Role" },
    { id: "mid_cyber_auditor", label: "Cybersecurity Auditor", group: "mid", x: 100, y: 300, title: "Mid-Level Role" },
    { id: "mid_reg_compliance_mgr", label: "Regulatory Compliance Manager", group: "mid", x: 100, y: 400, title: "Mid-Level Role" },
    // Advanced-Level Roles
    { id: "adv_grc_mgr", label: "GRC Manager/Director", group: "advanced", x: 400, y: -150, title: "Advanced Role" },
    { id: "adv_cro", label: "Chief Risk Officer (CRO)", group: "advanced", x: 400, y: -50, title: "Advanced Role" },
    { id: "adv_cco", label: "Chief Compliance Officer (CCO)", group: "advanced", x: 400, y: 50, title: "Advanced Role" },
    { id: "adv_cpo", label: "Chief Privacy Officer (CPO)", group: "advanced", x: 400, y: 150, title: "Advanced Role" },
    { id: "adv_cyber_auditor_senior", label: "Cybersecurity Auditor (Senior/Lead)", group: "advanced", x: 400, y: 250, title: "Advanced Role" },
    { id: "adv_ciso", label: "Chief Information Security Officer (CISO)", group: "advanced", x: 400, y: 350, title: "Advanced Role" },
  ];

  const edges = [
    // Feeder to Entry-Level (assumed connections based on context; adjust if specific connections are provided)
    { id: "e1", from: "feeder_medical", to: "entry_privacy_coord" },
    { id: "e2", from: "feeder_legal", to: "entry_grc_analyst" },
    { id: "e3", from: "feeder_project_mgmt", to: "entry_risk_compliance_assoc" },
    { id: "e4", from: "feeder_retail", to: "entry_third_party_coord" },
    { id: "e5", from: "feeder_military", to: "entry_sec_compliance_analyst" },
    { id: "e6", from: "feeder_trades", to: "entry_it_auditor" },
    { id: "e7", from: "feeder_food", to: "entry_privacy_coord" },
    { id: "e8", from: "feeder_finance", to: "entry_risk_compliance_assoc" },
    { id: "e9", from: "feeder_hr", to: "entry_sec_training_specialist" },
    // Entry-Level to Central
    { id: "e10", from: "entry_grc_analyst", to: "central_consultant" },
    { id: "e11", from: "entry_sec_compliance_analyst", to: "central_consultant" },
    { id: "e12", from: "entry_risk_compliance_assoc", to: "central_consultant" },
    { id: "e13", from: "entry_it_auditor", to: "central_consultant" },
    { id: "e14", from: "entry_privacy_coord", to: "central_consultant" },
    { id: "e15", from: "entry_third_party_coord", to: "central_consultant" },
    { id: "e16", from: "entry_sec_training_specialist", to: "central_consultant" },
    // Central to Mid-Level
    { id: "e17", from: "central_consultant", to: "mid_risk_mgmt_analyst" },
    { id: "e18", from: "central_consultant", to: "mid_sec_compliance_mgr" },
    { id: "e19", from: "central_consultant", to: "mid_cyber_policy_analyst" },
    { id: "e20", from: "central_consultant", to: "mid_third_party_assessor" },
    { id: "e21", from: "central_consultant", to: "mid_privacy_analyst" },
    { id: "e22", from: "central_consultant", to: "mid_cyber_auditor" },
    { id: "e23", from: "central_consultant", to: "mid_reg_compliance_mgr" },
    // Central to Advanced-Level
    { id: "e24", from: "central_consultant", to: "adv_grc_mgr" },
    { id: "e25", from: "central_consultant", to: "adv_cro" },
    { id: "e26", from: "central_consultant", to: "adv_cco" },
    { id: "e27", from: "central_consultant", to: "adv_cpo" },
    { id: "e28", from: "central_consultant", to: "adv_cyber_auditor_senior" },
    { id: "e29", from: "central_consultant", to: "adv_ciso" },
    // Entry-Level to Mid-Level (specific connections)
    { id: "e30", from: "entry_grc_analyst", to: "mid_sec_compliance_mgr" },
    { id: "e31", from: "entry_grc_analyst", to: "mid_risk_mgmt_analyst" },
    { id: "e32", from: "entry_grc_analyst", to: "mid_cyber_policy_analyst" },
    { id: "e33", from: "entry_sec_compliance_analyst", to: "mid_sec_compliance_mgr" },
    { id: "e34", from: "entry_sec_compliance_analyst", to: "mid_reg_compliance_mgr" },
    { id: "e35", from: "entry_sec_compliance_analyst", to: "mid_privacy_analyst" },
    { id: "e36", from: "entry_risk_compliance_assoc", to: "mid_risk_mgmt_analyst" },
    { id: "e37", from: "entry_risk_compliance_assoc", to: "mid_third_party_assessor" },
    { id: "e38", from: "entry_risk_compliance_assoc", to: "mid_reg_compliance_mgr" },
    { id: "e39", from: "entry_it_auditor", to: "mid_cyber_auditor" },
    { id: "e40", from: "entry_it_auditor", to: "mid_risk_mgmt_analyst" },
    { id: "e41", from: "entry_it_auditor", to: "mid_sec_compliance_mgr" },
    { id: "e42", from: "entry_privacy_coord", to: "mid_privacy_analyst" },
    { id: "e43", from: "entry_privacy_coord", to: "mid_reg_compliance_mgr" },
    { id: "e44", from: "entry_privacy_coord", to: "mid_sec_compliance_mgr" },
    { id: "e45", from: "entry_third_party_coord", to: "mid_third_party_assessor" },
    { id: "e46", from: "entry_third_party_coord", to: "mid_risk_mgmt_analyst" },
    { id: "e47", from: "entry_third_party_coord", to: "mid_sec_compliance_mgr" },
    { id: "e48", from: "entry_sec_training_specialist", to: "mid_cyber_policy_analyst" },
    { id: "e49", from: "entry_sec_training_specialist", to: "mid_reg_compliance_mgr" },
    { id: "e50", from: "entry_sec_training_specialist", to: "mid_sec_compliance_mgr" },
    // Mid-Level to Advanced-Level (specific connections)
    { id: "e51", from: "mid_risk_mgmt_analyst", to: "adv_grc_mgr" },
    { id: "e52", from: "mid_risk_mgmt_analyst", to: "adv_cro" },
    { id: "e53", from: "mid_risk_mgmt_analyst", to: "adv_cco" },
    { id: "e54", from: "mid_sec_compliance_mgr", to: "adv_grc_mgr" },
    { id: "e55", from: "mid_sec_compliance_mgr", to: "adv_cco" },
    { id: "e56", from: "mid_sec_compliance_mgr", to: "adv_cpo" },
    { id: "e57", from: "mid_cyber_policy_analyst", to: "adv_grc_mgr" },
    { id: "e58", from: "mid_cyber_policy_analyst", to: "adv_ciso" },
    { id: "e59", from: "mid_cyber_policy_analyst", to: "adv_cco" },
    { id: "e60", from: "mid_third_party_assessor", to: "adv_grc_mgr" },
    { id: "e61", from: "mid_third_party_assessor", to: "adv_cro" },
    { id: "e62", from: "mid_third_party_assessor", to: "adv_ciso" },
    { id: "e63", from: "mid_privacy_analyst", to: "mid_sec_compliance_mgr" },
    { id: "e64", from: "mid_privacy_analyst", to: "adv_cpo" },
    { id: "e65", from: "mid_privacy_analyst", to: "adv_grc_mgr" },
    { id: "e66", from: "mid_cyber_auditor", to: "mid_risk_mgmt_analyst" },
    { id: "e67", from: "mid_cyber_auditor", to: "mid_sec_compliance_mgr" },
    { id: "e68", from: "mid_cyber_auditor", to: "adv_grc_mgr" },
    { id: "e69", from: "mid_reg_compliance_mgr", to: "mid_sec_compliance_mgr" },
    { id: "e70", from: "mid_reg_compliance_mgr", to: "adv_grc_mgr" },
    { id: "e71", from: "mid_reg_compliance_mgr", to: "adv_cco" },
    // Advanced-Level internal connections (specific connections)
    { id: "e72", from: "adv_grc_mgr", to: "mid_reg_compliance_mgr" },
    { id: "e73", from: "adv_grc_mgr", to: "adv_cro" },
    { id: "e74", from: "adv_grc_mgr", to: "adv_cco" },
    { id: "e75", from: "adv_cro", to: "adv_cro" }, // Self-loop as specified
    { id: "e76", from: "adv_cro", to: "adv_cyber_auditor_senior" },
    { id: "e77", from: "adv_cro", to: "adv_cco" },
    { id: "e78", from: "adv_cco", to: "mid_privacy_analyst" },
    { id: "e79", from: "adv_cco", to: "adv_cro" },
    { id: "e80", from: "adv_cco", to: "adv_ciso" },
    { id: "e81", from: "adv_cpo", to: "mid_privacy_analyst" },
    { id: "e82", from: "adv_cpo", to: "adv_cco" },
    { id: "e83", from: "adv_cpo", to: "adv_ciso" },
    { id: "e84", from: "adv_cyber_auditor_senior", to: "mid_cyber_auditor" },
    { id: "e85", from: "adv_cyber_auditor_senior", to: "adv_cro" },
    { id: "e86", from: "adv_cyber_auditor_senior", to: "adv_cpo" },
    { id: "e87", from: "adv_ciso", to: "mid_reg_compliance_mgr" },
    { id: "e88", from: "adv_ciso", to: "adv_cco" },
    { id: "e89", from: "adv_ciso", to: "adv_cro" },
  ];

  const nodeDetails = {
    // Nontech Feeder Roles (updated with details in parentheses)
    "feeder_medical": `<div><strong>Role:</strong> Medical/Health Services<br/><strong>Skills:</strong> Regulatory compliance, HIPPA knowledge</div>`,
    "feeder_legal": `<div><strong>Role:</strong> Legal/Paralegal<br/><strong>Skills:</strong> Policy writing, regulatory compliance, contracts</div>`,
    "feeder_project_mgmt": `<div><strong>Role:</strong> Project Management<br/><strong>Skills:</strong> Risk assessment, governance, stakeholder communication</div>`,
    "feeder_retail": `<div><strong>Role:</strong> Retail & Customer Service<br/><strong>Skills:</strong> Fraud prevention, operational risk</div>`,
    "feeder_military": `<div><strong>Role:</strong> Military/Law Enforcement<br/><strong>Skills:</strong> Security policies investigations, intelligence</div>`,
    "feeder_trades": `<div><strong>Role:</strong> Trades & Operations<br/><strong>Skills:</strong> Physical security, safety compliance, industrial security</div>`,
    "feeder_food": `<div><strong>Role:</strong> Food Services & Hospitality<br/><strong>Skills:</strong> Regulatory compliance, PCI-DSS for payment security</div>`,
    "feeder_finance": `<div><strong>Role:</strong> Finance & Banking<br/><strong>Skills:</strong> Risk management, financial compliance, auditing</div>`,
    "feeder_hr": `<div><strong>Role:</strong> HR & Corporate Training<br/><strong>Skills:</strong> Security awareness, insider threat training</div>`,
    // Entry-Level Roles
    "entry_grc_analyst": `<div><strong>Role:</strong> GRC Analyst<br/><strong>Job Openings:</strong> 5,000<br/><strong>Average Salary:</strong> $112,792<br/><strong>Leads to:</strong> Security Compliance Manager, Risk Management Analyst, Cybersecurity Policy Analyst</div>`,
    "entry_sec_compliance_analyst": `<div><strong>Role:</strong> Security Compliance Analyst<br/><strong>Job Openings:</strong> 4,500<br/><strong>Average Salary:</strong> $112,000<br/><strong>Leads to:</strong> Security Compliance Manager, Regulatory Compliance Manager, Privacy Analyst</div>`,
    "entry_risk_compliance_assoc": `<div><strong>Role:</strong> Risk & Compliance Associate<br/><strong>Job Openings:</strong> 4,000<br/><strong>Average Salary:</strong> $110,000<br/><strong>Leads to:</strong> Risk Management Analyst, Third-Party Risk Assessor, Regulatory Compliance Manager</div>`,
    "entry_it_auditor": `<div><strong>Role:</strong> IT Auditor<br/><strong>Job Openings:</strong> 3,500<br/><strong>Average Salary:</strong> $95,000<br/><strong>Leads to:</strong> Cybersecurity Auditor, Risk Management Analyst, Security Compliance Manager</div>`,
    "entry_privacy_coord": `<div><strong>Role:</strong> Privacy & Data Protection Coordinator<br/><strong>Job Openings:</strong> 3,000<br/><strong>Average Salary:</strong> $105,000<br/><strong>Leads to:</strong> Privacy Analyst, Regulatory Compliance Manager, Security Compliance Manager</div>`,
    "entry_third_party_coord": `<div><strong>Role:</strong> Third-Party Risk Coordinator<br/><strong>Job Openings:</strong> 2,500<br/><strong>Average Salary:</strong> $100,000<br/><strong>Leads to:</strong> Third-Party Risk Assessor, Risk Management Analyst, Security Compliance Manager</div>`,
    "entry_sec_training_specialist": `<div><strong>Role:</strong> Security Awareness & Training Specialist<br/><strong>Job Openings:</strong> 2,000<br/><strong>Average Salary:</strong> $90,000<br/><strong>Leads to:</strong> Cybersecurity Policy Analyst, Regulatory Compliance Manager, Security Compliance Manager</div>`,
    // Central Role
    "central_consultant": `<div><strong>Role:</strong> Cybersecurity Consultant<br/><strong>Skills:</strong> Consulting</div>`,
    // Mid-Level Roles
    "mid_risk_mgmt_analyst": `<div><strong>Role:</strong> Risk Management Analyst<br/><strong>Job Openings:</strong> 3,000<br/><strong>Average Salary:</strong> $128,201<br/><strong>Leads to:</strong> GRC Manager/Director, CRO, CCO</div>`,
    "mid_sec_compliance_mgr": `<div><strong>Role:</strong> Security Compliance Manager<br/><strong>Job Openings:</strong> 2,800<br/><strong>Average Salary:</strong> $150,000<br/><strong>Leads to:</strong> GRC Manager/Director, CCO, CPO</div>`,
    "mid_cyber_policy_analyst": `<div><strong>Role:</strong> Cybersecurity Policy Analyst<br/><strong>Job Openings:</strong> 2,500<br/><strong>Average Salary:</strong> $120,000<br/><strong>Leads to:</strong> GRC Manager/Director, CISO, CCO</div>`,
    "mid_third_party_assessor": `<div><strong>Role:</strong> Third-Party Risk Assessor<br/><strong>Job Openings:</strong> 2,200<br/><strong>Average Salary:</strong> $115,000<br/><strong>Leads to:</strong> GRC Manager/Director, CRO, CISO</div>`,
    "mid_privacy_analyst": `<div><strong>Role:</strong> Privacy Analyst (GDPR, CCPA, HIPPA, PCI-DSS)<br/><strong>Job Openings:</strong> 2,500<br/><strong>Average Salary:</strong> $74,751<br/><strong>Leads to:</strong> Security Compliance Manager, CPO, GRC Manager/Director</div>`,
    "mid_cyber_auditor": `<div><strong>Role:</strong> Cybersecurity Auditor<br/><strong>Job Openings:</strong> 2,200<br/><strong>Average Salary:</strong> $120,360<br/><strong>Leads to:</strong> Risk Management Analyst, Security Compliance Manager, GRC Manager/Director</div>`,
    "mid_reg_compliance_mgr": `<div><strong>Role:</strong> Regulatory Compliance Manager<br/><strong>Job Openings:</strong> 2,800<br/><strong>Average Salary:</strong> $99,400<br/><strong>Leads to:</strong> Security Compliance Manager, GRC Manager/Director, CCO</div>`,
    // Advanced-Level Roles
    "adv_grc_mgr": `<div><strong>Role:</strong> GRC Manager/Director<br/><strong>Job Openings:</strong> 1,800<br/><strong>Average Salary:</strong> $150,000<br/><strong>Leads to:</strong> Regulatory Compliance Manager, CRO, CCO</div>`,
    "adv_cro": `<div><strong>Role:</strong> Chief Risk Officer (CRO)<br/><strong>Job Openings:</strong> 1,200<br/><strong>Average Salary:</strong> $200,000<br/><strong>Leads to:</strong> CRO, Cybersecurity Auditor (Senior/Lead), CCO</div>`,
    "adv_cco": `<div><strong>Role:</strong> Chief Compliance Officer (CCO)<br/><strong>Job Openings:</strong> 1,000<br/><strong>Average Salary:</strong> $190,000<br/><strong>Leads to:</strong> Privacy Analyst, CRO, CISO</div>`,
    "adv_cpo": `<div><strong>Role:</strong> Chief Privacy Officer (CPO)<br/><strong>Job Openings:</strong> 800<br/><strong>Average Salary:</strong> $180,000<br/><strong>Leads to:</strong> Privacy Analyst, CCO, CISO</div>`,
    "adv_cyber_auditor_senior": `<div><strong>Role:</strong> Cybersecurity Auditor (Senior/Lead)<br/><strong>Job Openings:</strong> 1,100<br/><strong>Average Salary:</strong> $140,000<br/><strong>Leads to:</strong> Cybersecurity Auditor, CRO, CPO</div>`,
    "adv_ciso": `<div><strong>Role:</strong> Chief Information Security Officer (CISO)<br/><strong>Job Openings:</strong> 700<br/><strong>Average Salary:</strong> $250,000<br/><strong>Leads to:</strong> Regulatory Compliance Manager, CCO, CRO</div>`,
  };

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
        setWidth(window.innerWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Add level labels
  const addLevelLabels = (container, dims, scaleFactor) => {
    if (!container || !dims || dims.width === 0) {
      console.warn("Cannot add labels: container or dimensions not ready", { container, dims });
      return;
    }

    console.log("Adding level labels, container:", container, "dimensions:", dims, "scaleFactor:", scaleFactor);

    // Remove existing labels
    const existingLabels = container.getElementsByTagName("div");
    for (let i = existingLabels.length - 1; i >= 0; i--) {
      if (existingLabels[i].innerText.match(/ROLE|LEVEL/)) {
        container.removeChild(existingLabels[i]);
      }
    }

    // Define label positions relative to the container
    const labels = [
      { text: "NONTECH FEEDER ROLE", x: 150, y: 20 },
      { text: "ENTRY-LEVEL", x: dims.width * 0.25 + 20, y: 20 },
      { text: "MID-LEVEL", x: dims.width * 0.5, y: 20 },
      { text: "ADVANCED-LEVEL", x: dims.width * 0.75, y: 20 },
    ];

    labels.forEach((label) => {
      const div = document.createElement("div");
      div.innerText = label.text;
      div.style.position = "absolute";
      div.style.color = "#666";
      div.style.fontSize = `${10 * (scaleFactor || 1)}px`;
      div.style.fontWeight = "bold";
      div.style.left = `${label.x}px`;
      div.style.top = `${label.y}px`;
      div.style.zIndex = "1001";
      container.appendChild(div);
      console.log(`Added label: ${label.text} at ${label.x}px, ${label.y}px`);
    });
  };

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    console.log("useEffect triggered, containerRef:", containerRef.current);

    // Scale factor based on container width (assuming base width is 800px for the original layout)
    const baseWidth = 800;
    const scaleFactor = dimensions.width / baseWidth;

    // Scale nodes dynamically
    const scaledNodes = baseNodes.map((node) => ({
      ...node,
      x: node.x * scaleFactor,
      y: node.y * scaleFactor,
      size: node.size * scaleFactor,
    }));

    const options = {
      nodes: {
        shape: "circle", // Default shape for all nodes
        font: {
          size: 12 * scaleFactor,
          color: "#000",
          face: "arial",
          multi: "html",
          align: "center",
        },
        color: {
          background: "#fff",
          border: "#666",
          highlight: { background: "#e0e0e0", border: "#333" },
        },
        widthConstraint: { minimum: 80 * scaleFactor, maximum: 120 * scaleFactor },
        borderWidth: 2 * scaleFactor,
        size: 25 * scaleFactor,
      },
      edges: {
        color: { color: "transparent", highlight: "transparent" }, // Invisible by default
        width: 1 * scaleFactor,
        smooth: { enabled: true, type: "curvedCW" },
        arrows: { to: { enabled: false } },
      },
      groups: {
        feeder: { shape: "text", font: { size: 12 * scaleFactor, color: "#000" } }, // Feeder roles as plain text
        entry: { borderWidth: 2 * scaleFactor, color: { border: "#87CEEB", background: "#089efe" } },
        mid: { borderWidth: 2 * scaleFactor, color: { border: "#98FF98", background: "#55D7AE" } },
        central: { borderWidth: 2 * scaleFactor, color: { border: "#98FF98", background: "#55D7AE" }, widthConstraint: { minimum: 120, maximum: 150 } },
        advanced: { borderWidth: 2 * scaleFactor, color: { border: "#FFA07A", background: "#D58654" } },
      },
      interaction: {
        hover: true,
        zoomView: true,
        dragNodes: false,
        dragView: false,
      },
      physics: { enabled: false },
      autoResize: true,
    };

    // Initialize Network only if not already initialized
    if (!isNetworkInitialized.current) {
      networkRef.current = new Network(containerRef.current, { nodes: scaledNodes, edges }, options);
      isNetworkInitialized.current = true;
      console.log("Network initialized");
      addLevelLabels(containerRef.current, dimensions, scaleFactor);
    } else {
      networkRef.current.setData({ nodes: scaledNodes, edges });
      console.log("Network data updated");
      addLevelLabels(containerRef.current, dimensions, scaleFactor);
    }

    const network = networkRef.current;

    // Prevent touch events from interfering with scrolling
    const canvas = containerRef.current.querySelector("canvas");
    if (canvas) {
      // Set a high zIndex for the canvas in mobile view to ensure edges are on top
      if (width <= 768) {
        canvas.style.zIndex = "1002"; // Higher than modal (1000) and labels (1001)
      } else {
        canvas.style.zIndex = "0"; // Reset in desktop view
      }

      canvas.addEventListener("touchmove", (e) => {
        if (e.touches.length === 1) {
          e.preventDefault();
        }
      });
    }

    // Handle click for mobile using DOM event listener
    if (width <= 768 && canvas) {
      const handleCanvasClick = (event) => {
        console.log("Canvas click detected, event:", event);
        if (!networkRef.current) {
          console.warn("Network not initialized");
          return;
        }

        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
        console.log("Click coordinates relative to canvas:", { clickX, clickY });

        const nodeId = networkRef.current.getNodeAt({ x: clickX, y: clickY });
        console.log("Node ID at click position:", nodeId);

        if (nodeId) {
          const node = baseNodes.find((n) => n.id === nodeId);
          if (node) {
            if (modalContent) {
              setModalContent(null);
              console.log("Modal closed on click");
            } else {
              const defaultX = dimensions.width / 2;
              const defaultY = dimensions.height / 2;
              setModalContent(nodeDetails[node.id] || "No details");
              setModalPosition({ x: defaultX, y: defaultY });
              console.log("Modal opened on click, default position:", { x: defaultX, y: defaultY });
            }
          } else {
            console.warn("Node not found for nodeId:", nodeId);
          }
        } else {
          console.log("No node found at click position");
        }
      };

      canvas.addEventListener("click", handleCanvasClick);

      return () => {
        canvas.removeEventListener("click", handleCanvasClick);
      };
    }

    // Handle hover for desktop only (Tippy)
    if (width > 768) {
      network.on("hoverNode", (params) => {
        const nodeId = params.node;
        if (nodeId && containerRef.current && networkRef.current) {
          const connectedEdges = network.getConnectedEdges(nodeId);
          connectedEdges.forEach((edgeId) => {
            const edge = edges.find((e) => e.id === edgeId);
            if (edge) {
              network.body.data.edges.update({
                id: edge.id,
                arrows: { to: { enabled: true, scaleFactor: 1 } },
                width: 2 * scaleFactor,
                color: { color: "#444", highlight: "#444" }, // Make edge visible on hover
              });
            }
          });

          const node = baseNodes.find((n) => n.id === nodeId);
          if (node && !isTippyOpen) {
            const nodePosition = network.getPositions([nodeId])[nodeId];
            const domPosition = network.canvasToDOM({ x: nodePosition.x, y: nodePosition.y });
            const nodeSize = node.size || 25 * scaleFactor;
            const adjustedY = domPosition.y + nodeSize;

            const virtualReference = {
              getReferenceClientRect: () => ({
                width: 0,
                height: 0,
                top: adjustedY,
                left: domPosition.x,
                right: domPosition.x,
                bottom: adjustedY,
              }),
            };

            if (tippyInstanceRef.current) {
              tippyInstanceRef.current.destroy();
              console.log("Destroyed existing Tippy instance on hover");
            }

            tippyInstanceRef.current = Tippy(containerRef.current, {
              content: nodeDetails[node.id] || "No details",
              trigger: "manual",
              placement: "bottom",
              appendTo: containerRef.current,
              allowHTML: true,
              showOnCreate: true,
              getReferenceClientRect: virtualReference.getReferenceClientRect,
              onHidden: (instance) => {
                console.log("Tippy hidden on blur");
                setTimeout(() => {
                  if (tippyInstanceRef.current && !tippyInstanceRef.current.state.isDestroyed) {
                    tippyInstanceRef.current.destroy();
                    tippyInstanceRef.current = null;
                    setIsTippyOpen(false);
                    console.log("Tippy destroyed after delay");
                  }
                }, 100);
              },
              popperOptions: {
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: {
                      boundary: containerRef.current,
                    },
                  },
                ],
              },
            });
            setIsTippyOpen(true);
            console.log("New Tippy instance created on hover");
          }
        }
      });

      network.on("blurNode", () => {
        if (tippyInstanceRef.current) {
          console.log("Blur detected, hiding Tippy");
          tippyInstanceRef.current.hide();
        }
        edges.forEach((edge) => {
          network.body.data.edges.update({
            id: edge.id,
            arrows: { to: { enabled: false } },
            width: 1 * scaleFactor,
            color: { color: "transparent", highlight: "transparent" }, // Make edge invisible on blur
          });
        });
      });
    }

    const handleResize = () => {
      const baseWidth = 800;
      const scaleFactor = dimensions.width / baseWidth;
      addLevelLabels(containerRef.current, dimensions, scaleFactor);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (networkRef.current) {
        networkRef.current.destroy();
        networkRef.current = null;
        isNetworkInitialized.current = false;
        console.log("Cleanup: Network destroyed on unmount");
      }
      if (tippyInstanceRef.current && !tippyInstanceRef.current.state.isDestroyed) {
        tippyInstanceRef.current.destroy();
        tippyInstanceRef.current = null;
        console.log("Cleanup: Tippy destroyed on unmount");
      }
    };
  }, [dimensions, width]);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${width > 850 ? "100vh" : "80vh"}`,
        width: "100%",
        border: "1px solid #ccc",
        background: "#fafafa",
        position: "relative",
        touchAction: "auto",
      }}
      onClick={(e) => console.log("Container clicked, event:", e)}
    >
      {/* Gray overlay with "View on Desktop" text in mobile view */}
      {width <= 768 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(128, 128, 128, 0.8)", // Gray overlay with opacity
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000, // Below the canvas (1002) but above other elements
          }}
        >
          <div
            style={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            View on Desktop
          </div>
        </div>
      )}

      {/* Modal for mobile view */}
      {modalContent && width <= 768 && (
        <div
          style={{
            position: "absolute",
            top: `${modalPosition.y}px`,
            left: `${modalPosition.x}px`,
            transform: "translateX(-50%) translateY(-50%)",
            background: "#fff",
            border: "1px solid #666",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            zIndex: 1001, // Above the overlay (1000) but below the canvas (1002)
            maxWidth: "80%",
            maxHeight: "50%",
            overflow: "auto",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setModalContent(null);
            console.log("Modal closed via click on modal");
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        </div>
      )}
    </div>
  );
};

export default CyberChart;