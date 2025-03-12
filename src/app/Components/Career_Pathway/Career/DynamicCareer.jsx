"use client"
// components/CareerChart.js
import React from "react";
import { Graph } from "react-d3-graph";

const CareerChart = () => {
  const data = {
    nodes: [
      { id: "Cybersecurity Consultant", color: "lightgreen", size: 500 },
      { id: "Cybersecurity Specialist", color: "dodgerblue", size: 400 },
      { id: "Cyber Crime Analyst", color: "dodgerblue", size: 400 },
      { id: "Incident & Intrusion Analyst", color: "dodgerblue", size: 400 },
      { id: "IT Auditor", color: "dodgerblue", size: 400 },
      { id: "Penetration & Vulnerability Tester", color: "lightgreen", size: 400 },
      { id: "Cybersecurity Analyst", color: "lightgreen", size: 400 },
      { id: "Cybersecurity Engineer", color: "orange", size: 400 },
      { id: "Cybersecurity Architect", color: "orange", size: 400 }
    ],
    links: [
      { source: "Cybersecurity Specialist", target: "Cybersecurity Consultant" },
      { source: "Cyber Crime Analyst", target: "Cybersecurity Consultant" },
      { source: "Incident & Intrusion Analyst", target: "Cybersecurity Consultant" },
      { source: "IT Auditor", target: "Cybersecurity Consultant" },
      { source: "Cybersecurity Consultant", target: "Penetration & Vulnerability Tester" },
      { source: "Cybersecurity Consultant", target: "Cybersecurity Analyst" },
      { source: "Cybersecurity Analyst", target: "Cybersecurity Engineer" },
      { source: "Cybersecurity Analyst", target: "Cybersecurity Architect" }
    ]
  };

  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgray",
      size: 300,
      fontSize: 12
    },
    link: {
      highlightColor: "red"
    }
  };

  const handleNodeClick = (nodeId) => {
    alert(`You clicked on ${nodeId}`);
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Graph
        id="career-chart"
        data={data}
        config={config}
        onClickNode={handleNodeClick}
      />
    </div>
  );
};

export default CareerChart;
