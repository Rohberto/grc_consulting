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
        shape: "circle",
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
        color: "#666",
        width: 1 * scaleFactor,
        smooth: { enabled: true, type: "curvedCW" },
        arrows: { to: { enabled: false } },
      },
      groups: {
        feeder: { borderWidth: 2 * scaleFactor, color: { border: "#87CEEB" } },
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
    } else {
      // Update nodes and edges if network exists (for dynamic resizing)
      networkRef.current.setData({ nodes: scaledNodes, edges });
      console.log("Network data updated");
    }

    const network = networkRef.current;

    // Prevent touch events from interfering with scrolling
    const canvas = containerRef.current.querySelector("canvas");
    if (canvas) {
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

        // Get click coordinates relative to the canvas
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
        console.log("Click coordinates relative to canvas:", { clickX, clickY });

        // Map click coordinates to a node
        const nodeId = networkRef.current.getNodeAt({ x: clickX, y: clickY });
        console.log("Node ID at click position:", nodeId);

        if (nodeId) {
          const node = baseNodes.find((n) => n.id === nodeId);
          if (node) {
            if (modalContent) {
              // Close the modal if already open
              setModalContent(null);
              console.log("Modal closed on click");
            } else {
              // Open the modal with node details at default position
              const defaultX = dimensions.width / 1.4; // Center horizontally
              const defaultY = dimensions.height / 1.3; // Center vertically
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

      // Attach click event listener to the canvas
      canvas.addEventListener("click", handleCanvasClick);

      // Cleanup the event listener on unmount
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
                color: { color: "#444", highlight: "#444" },
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
      });

      // Edge hover for desktop
      network.on("hoverEdge", (params) => {
        const edge = edges.find((e) => e.id === params.edge);
        if (edge && networkRef.current) {
          network.body.data.edges.update({ id: edge.id, arrows: { to: { enabled: true, scaleFactor: 1 } }, width: 2 * scaleFactor });
        }
      });

      network.on("blurEdge", (params) => {
        const edge = edges.find((e) => e.id === params.edge);
        if (edge && networkRef.current) {
          network.body.data.edges.update({ id: edge.id, arrows: { to: { enabled: false } }, width: 1 * scaleFactor });
        }
      });
    }

    // Reset edges on blur (for desktop)
    network.on("blurNode", () => {
      edges.forEach((edge) => {
        network.body.data.edges.update({
          id: edge.id,
          arrows: { to: { enabled: false } },
          width: 1 * scaleFactor,
          color: { color: "#666", highlight: "#666" },
        });
      });
    });

    // Add level labels
    const addLevelLabels = () => {
      const container = containerRef.current;
      if (!container) return;
      const existingLabels = container.getElementsByTagName("div");
      while (existingLabels.length > 0 && existingLabels[0].innerText.match(/ROLE|LEVEL/)) {
        container.removeChild(existingLabels[0]);
      }

      const labels = [
        { text: "FEEDER ROLE", x: -500 * scaleFactor, y: 0 * scaleFactor },
        { text: "ENTRY-LEVEL", x: -250 * scaleFactor, y: 0 * scaleFactor },
        { text: "MID-LEVEL", x: -50, y: 0 * scaleFactor },
        { text: "ADVANCED-LEVEL", x: 150 * scaleFactor, y: 0 * scaleFactor },
      ];

      labels.forEach((label) => {
        const div = document.createElement("div");
        div.innerText = label.text;
        div.style.position = "absolute";
        div.style.color = "#666";
        div.style.fontSize = `${10 * scaleFactor}px`;
        div.style.fontWeight = "bold";
        div.style.left = `calc(70% + ${label.x}px)`;
        div.style.top = `50px`;
        div.style.transform = "translateX(-70%)";
        container.appendChild(div);
      });
    };

    network.on("afterDrawing", () => {
      addLevelLabels();
    });

    return () => {
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
      style={{ height: `${width > 850 ? "800px" : "60vh"}`, width: "100%", border: "1px solid #ccc", background: "#fafafa", position: "relative", touchAction: "auto" }}
      onClick={(e) => console.log("Container clicked, event:", e)} // Debug container clicks
    >
      {modalContent && width <= 768 && (
        <div
          style={{
            position: "absolute",
            top: `${modalPosition.y}px`,
            left: `${modalPosition.x}px`,
            transform: "translateX(-50%) translateY(-50%)", // Center the modal
            background: "#fff",
            border: "1px solid #666",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            zIndex: 1000,
            maxWidth: "80%", // Prevent overflow
            maxHeight: "50%", // Prevent overflow
            overflow: "auto", // Allow scrolling if content is long
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from propagating to network
            setModalContent(null); // Close modal on click
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