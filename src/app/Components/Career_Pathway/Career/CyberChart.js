"use client";

import { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import "vis-network/styles/vis-network.css";
import Tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const CyberChart = () => {
  const containerRef = useRef(null);
  const networkRef = useRef(null);
  const tippyInstanceRef = useRef(null); // Ref to store the current Tippy instance

  // Nodes with manual x, y coordinates for precise positioning
  const nodes = [
    { id: "central_consultant", label: "Cybersecurity Consultant", group: "central", x: 100, y: 0, size: 40, title: "Central Role" },
    { id: "feeder_networking", label: "Networking", group: "feeder", x: -400, y: -200, title: "Feeder Role" },
    { id: "feeder_software_dev", label: "Software Development", group: "feeder", x: -400, y: -120, title: "Feeder Role" },
    { id: "feeder_systems_eng", label: "Systems Engineering", group: "feeder", x: -400, y: -40, title: "Feeder Role" },
    { id: "feeder_fin_risk", label: "Financial and Risk Analysis", group: "feeder", x: -400, y: 40, title: "Feeder Role" },
    { id: "feeder_sec_intel", label: "Security Intelligence", group: "feeder", x: -400, y: 120, title: "Feeder Role" },
    { id: "feeder_it_support", label: "IT Support", group: "feeder", x: -400, y: 200, title: "Feeder Role" },
    { id: "entry_specialist", label: "Cybersecurity Specialist", group: "entry", x: -150, y: -150, title: "Entry-Level Role" },
    { id: "mid_analyst", label: "Cybersecurity Analyst", group: "mid", x: 100, y: -200, title: "Mid-Level Role" },
    { id: "entry_crime_analyst", label: "Cyber Crime Analyst", group: "entry", x: -150, y: -50, title: "Entry-Level Role" },
    { id: "entry_incident_analyst", label: "Incident & Intrusion Analyst", group: "entry", x: -150, y: 100, title: "Entry-Level Role" },
    { id: "entry_it_auditor", label: "IT Auditor", group: "entry", x: -150, y: 250, title: "Entry-Level Role" },
    { id: "mid_pen_test", label: "Penetration & Vulnerability Tester", group: "mid", x: 100, y: 200, title: "Mid-Level Role" },
    { id: "adv_analyst", label: "Cybersecurity Analyst", group: "advanced", x: 400, y: -120, title: "Advanced Role" },
    { id: "adv_engineer", label: "Cybersecurity Engineer", group: "advanced", x: 400, y: 0, title: "Advanced Role" },
    { id: "adv_architect", label: "Cybersecurity Architect", group: "advanced", x: 400, y: 120, title: "Advanced Role" },
  ];

  const edges = [
    { id: "e1", from: "central_consultant", to: "mid_specialist" },
    { id: "e2", from: "feeder_software_dev", to: "entry_analyst" },
    { id: "e3", from: "feeder_systems_eng", to: "entry_crime_analyst" },
    { id: "e4", from: "feeder_fin_risk", to: "entry_incident_analyst" },
    { id: "e5", from: "feeder_sec_intel", to: "entry_it_auditor" },
    { id: "e6", from: "feeder_it_support", to: "entry_specialist" },
    { id: "e7", from: "entry_specialist", to: "central_consultant" },
    { id: "e8", from: "mid_analyst", to: "central_consultant" },
    { id: "e9", from: "entry_crime_analyst", to: "central_consultant" },
    { id: "e10", from: "entry_incident_analyst", to: "central_consultant" },
    { id: "e11", from: "entry_it_auditor", to: "central_consultant" },
    { id: "e12", from: "mid_pen_test", to: "central_consultant" },
    { id: "e13", from: "central_consultant", to: "adv_analyst" },
    { id: "e14", from: "central_consultant", to: "adv_engineer" },
    { id: "e15", from: "central_consultant", to: "adv_architect" },
  ];

  const nodeDetails = {
    "feeder_networking": `<div><strong>Role:</strong> Networking<br/><strong>Skills:</strong> TCP/IP</div>`,
    "feeder_software_dev": `<div><strong>Role:</strong> Software Development<br/><strong>Skills:</strong> Coding</div>`,
    "feeder_systems_eng": `<div><strong>Role:</strong> Systems Engineering<br/><strong>Skills:</strong> Systems Design</div>`,
    "feeder_fin_risk": `<div><strong>Role:</strong> Financial and Risk Analysis<br/><strong>Skills:</strong> Risk Assessment</div>`,
    "feeder_sec_intel": `<div><strong>Role:</strong> Security Intelligence<br/><strong>Skills:</strong> Threat Analysis</div>`,
    "feeder_it_support": `<div><strong>Role:</strong> IT Support<br/><strong>Skills:</strong> Troubleshooting</div>`,
    "entry_specialist": `<div><strong>Role:</strong> Cybersecurity Specialist<br/><strong>Skills:</strong> Basic Security</div>`,
    "entry_analyst": `<div><strong>Role:</strong> Cybersecurity Analyst<br/><strong>Skills:</strong> SIEM</div>`,
    "entry_crime_analyst": `<div><strong>Role:</strong> Cyber Crime Analyst<br/><strong>Skills:</strong> Forensics</div>`,
    "entry_incident_analyst": `<div><strong>Role:</strong> Incident & Intrusion Analyst<br/><strong>Skills:</strong> Incident Response</div>`,
    "entry_it_auditor": `<div><strong>Role:</strong> IT Auditor<br/><strong>Skills:</strong> Auditing</div>`,
    "central_consultant": `<div><strong>Role:</strong> Cybersecurity Consultant<br/><strong>Skills:</strong> Consulting</div>`,
    "mid_pen_test": `<div><strong>Role:</strong> Penetration & Vulnerability Tester<br/><strong>Skills:</strong> Penetration Testing</div>`,
    "adv_analyst": `<div><strong>Role:</strong> Cybersecurity Analyst<br/><strong>Skills:</strong> Advanced Analysis</div>`,
    "adv_engineer": `<div><strong>Role:</strong> Cybersecurity Engineer<br/><strong>Skills:</strong> Engineering</div>`,
    "adv_architect": `<div><strong>Role:</strong> Cybersecurity Architect<br/><strong>Skills:</strong> Architecture</div>`,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      nodes: {
        shape: "circle",
        font: {
          size: 12,
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
        widthConstraint: { minimum: 80, maximum: 120 },
        borderWidth: 2,
        size: 25,
      },
      edges: {
        color: "#666",
        width: 1, // Default width
        smooth: { enabled: true, type: "curvedCW" },
        arrows: { to: { enabled: false } },
      },
      groups: {
        feeder: { borderWidth: 2, color: { border: "#87CEEB" } },
        entry: { borderWidth: 2, color: { border: "#87CEEB", background: "#089efe" } },
        mid: { borderWidth: 2, color: { border: "#98FF98", background: "#55D7AE" } },
        central: { borderWidth: 2, color: { border: "#98FF98",  background: "#55D7AE" },   widthConstraint: { minimum: 150, maximum: 150 }, },
        advanced: { borderWidth: 2, color: { border: "#FFA07A", background: "#D58654"  } },
      },
      interaction: { hover: true, zoomView: true, dragNodes: false },
      physics: { enabled: false },
    };

    const network = new Network(containerRef.current, { nodes, edges }, options);
    networkRef.current = network;

    // Show arrows and sharpen edges on node hover
    network.on("hoverNode", (params) => {
      const nodeId = params.node;
      if (nodeId) {
        // Get all edges connected to the hovered node
        const connectedEdges = network.getConnectedEdges(nodeId);
        connectedEdges.forEach((edgeId) => {
          const edge = edges.find((e) => e.id === edgeId);
          if (edge) {
            network.body.data.edges.update({
              id: edge.id,
              arrows: { to: { enabled: true, scaleFactor: 1 } }, // Show arrowheads
              width: 2, // Increase width for "sharper" look
              color: { color: "#444", highlight: "#444" }, // Darken for emphasis
            });
          }
        });

        // Tooltip setup
        const node = nodes.find((n) => n.id === nodeId);
        if (node) {
          const nodePosition = network.getPositions([nodeId])[nodeId];
          const domPosition = network.canvasToDOM({ x: nodePosition.x, y: nodePosition.y });
          const nodeSize = node.size || 25;
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
          }

          tippyInstanceRef.current = Tippy(containerRef.current, {
            content: nodeDetails[node.id] || "No details",
            trigger: "manual",
            placement: "bottom",
            appendTo: containerRef.current,
            allowHTML: true,
            showOnCreate: true,
            getReferenceClientRect: virtualReference.getReferenceClientRect,
            onHidden: (instance) => instance.destroy(),
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
        }
      }
    });

    // Reset edges on node blur
    network.on("blurNode", () => {
      edges.forEach((edge) => {
        network.body.data.edges.update({
          id: edge.id,
          arrows: { to: { enabled: false } },
          width: 1, // Reset to default width
          color: { color: "#666", highlight: "#666" }, // Reset color
        });
      });

      if (tippyInstanceRef.current) {
        tippyInstanceRef.current.hide();
        tippyInstanceRef.current.destroy();
        tippyInstanceRef.current = null;
      }
    });

    // Show arrows on edge hover (optional, can be removed if not needed)
    network.on("hoverEdge", (params) => {
      const edge = edges.find((e) => e.id === params.edge);
      if (edge) {
        network.body.data.edges.update({ id: edge.id, arrows: { to: { enabled: true, scaleFactor: 1 } }, width: 2 });
      }
    });

    network.on("blurEdge", (params) => {
      const edge = edges.find((e) => e.id === params.edge);
      if (edge) {
        network.body.data.edges.update({ id: edge.id, arrows: { to: { enabled: false } }, width: 1 });
      }
    });

    // Add level labels (Feeder Role, Entry-Level, etc.) as HTML overlays
    const addLevelLabels = () => {
      const container = containerRef.current;
      const labels = [
        { text: "FEEDER ROLE", x: -450, y: -300 },
        { text: "ENTRY-LEVEL", x: -150, y: -300 },
        { text: "MID-LEVEL", x: 100, y: -300 },
        { text: "ADVANCED-LEVEL", x: 350, y: -300 },
      ];

      labels.forEach((label) => {
        const div = document.createElement("div");
        div.innerText = label.text;
        div.style.position = "absolute";
        div.style.color = "#666";
        div.style.fontSize = "14px";
        div.style.fontWeight = "bold";
        div.style.left = `calc(50% + ${label.x}px)`;
        div.style.top = `calc(50% + ${label.y}px)`;
        div.style.transform = "translate(-50%, -50%)";
        container.appendChild(div);
      });
    };

    network.on("afterDrawing", () => {
      addLevelLabels();
    });

    return () => {
      if (networkRef.current) networkRef.current.destroy();
      if (tippyInstanceRef.current) {
        tippyInstanceRef.current.destroy();
        tippyInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: "800px", width: "100%", border: "1px solid #ccc", background: "#fafafa", position: "relative" }}
    />
  );
};

export default CyberChart;