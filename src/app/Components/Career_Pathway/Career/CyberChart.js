'use client';

import { minHeight } from '@mui/system';
import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { Background, Controls} from 'reactflow';
import 'reactflow/dist/style.css';
import "./cyberchart.css";



// Custom node styles (larger circles with text inside)
const customNodeStyles = {
  feeder: { 
    background: 'transparent', 
    borderRadius: '50%', 
    width: '150px' , 
    height: '150px', 
    border: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'black', 
    fontSize: '16px', 
    textAlign: 'center', 
    padding: '15px', 
    cursor: 'pointer' 
  },
  entry: { 
    background: '#2ecc71', 
    borderRadius: '50%', 
    width: '150px', 
    height: '150px', 
    border: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'white', 
    fontSize: '16px', 
    textAlign: 'center', 
    padding: '15px', 
    cursor: 'pointer' 
  },
  mid: { 
    background: '#e67e22', 
    borderRadius: '50%', 
    width: '150px', 
    height: '150px', 
    border: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'white', 
    fontSize: '16px', 
    textAlign: 'center', 
    padding: '15px', 
    cursor: 'pointer' 
  },
  advanced: { 
    background: '#9b59b6', 
    borderRadius: '50%', 
    width: '150px', 
    height: '150px', 
    border: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'white', 
    fontSize: '16px', 
    textAlign: 'center', 
    padding: '15px', 
    cursor: 'pointer' 
  },
};

// Data with labeled titles
const initialNodes = [
  // Nontech Feeder Roles (Column 1)
  { id: 'f1', data: { label: 'Medical/Health Services', details: 'Regulatory compliance, HIPAA knowledge', title: 'Feeder Role' }, position: { x: 50, y: 50 }, style: customNodeStyles.feeder },
  { id: 'f2', data: { label: 'Legal/Paralegal', details: 'Policy writing, regulatory compliance, contracts', title: 'Feeder Role' }, position: { x: 50, y: 220 }, style: customNodeStyles.feeder },
  { id: 'f3', data: { label: 'Project Management', details: 'Risk assessment, governance, stakeholder communication', title: 'Feeder Role' }, position: { x: 50, y: 390 }, style: customNodeStyles.feeder },
  { id: 'f4', data: { label: 'Retail & Customer Service', details: 'Fraud prevention, operational risk', title: 'Feeder Role' }, position: { x: 50, y: 560 }, style: customNodeStyles.feeder },
  { id: 'f5', data: { label: 'Military/Law Enforcement', details: 'Security policies, investigations, intelligence', title: 'Feeder Role' }, position: { x: 50, y: 730 }, style: customNodeStyles.feeder },
  { id: 'f6', data: { label: 'Trades & Operations', details: 'Physical security, safety compliance, industrial security', title: 'Feeder Role' }, position: { x: 50, y: 900 }, style: customNodeStyles.feeder },
  { id: 'f7', data: { label: 'Food Services & Hospitality', details: 'Regulatory compliance, PCI-DSS for payment security', title: 'Feeder Role' }, position: { x: 50, y: 1070 }, style: customNodeStyles.feeder },
  { id: 'f8', data: { label: 'Finance & Banking', details: 'Risk management, financial compliance, auditing', title: 'Feeder Role' }, position: { x: 50, y: 1240 }, style: customNodeStyles.feeder },
  { id: 'f9', data: { label: 'HR & Corporate Training', details: 'Security awareness, insider threat training', title: 'Feeder Role' }, position: { x: 50, y: 1410 }, style: customNodeStyles.feeder },

  // Entry-Level Roles (Column 2)
  { id: 'e1', data: { label: 'GRC Analyst', details: 'Job Openings: 5,000, Average Salary: $112,792', title: 'Entry Role' }, position: { x: 300, y: 50 }, style: customNodeStyles.entry },
  { id: 'e2', data: { label: 'Security Compliance Analyst', details: 'Job Openings: 4,500, Average Salary: $112,000', title: 'Entry Role' }, position: { x: 300, y: 220 }, style: customNodeStyles.entry },
  { id: 'e3', data: { label: 'Risk & Compliance Associate', details: 'Job Openings: 4,000, Average Salary: $110,000', title: 'Entry Role' }, position: { x: 300, y: 390 }, style: customNodeStyles.entry },
  { id: 'e4', data: { label: 'IT Auditor', details: 'Job Openings: 3,500, Average Salary: $95,000', title: 'Entry Role' }, position: { x: 300, y: 560 }, style: customNodeStyles.entry },
  { id: 'e5', data: { label: 'Privacy & Data Protection Coordinator', details: 'Job Openings: 3,000, Average Salary: $105,000', title: 'Entry Role' }, position: { x: 300, y: 730 }, style: customNodeStyles.entry },
  { id: 'e6', data: { label: 'Third-Party Risk Coordinator', details: 'Job Openings: 2,500, Average Salary: $100,000', title: 'Entry Role' }, position: { x: 300, y: 900 }, style: customNodeStyles.entry },
  { id: 'e7', data: { label: 'Security Awareness & Training Specialist', details: 'Job Openings: 2,000, Average Salary: $90,000', title: 'Entry Role' }, position: { x: 300, y: 1070 }, style: customNodeStyles.entry },

  // Mid-Level Roles (Column 3)
  { id: 'm1', data: { label: 'Risk Management Analyst', details: 'Job Openings: 3,000, Average Salary: $128,201', title: 'Mid-Level Role' }, position: { x: 550, y: 50 }, style: customNodeStyles.mid },
  { id: 'm2', data: { label: 'Security Compliance Manager', details: 'Job Openings: 2,800, Average Salary: $150,000', title: 'Mid-Level Role' }, position: { x: 550, y: 220 }, style: customNodeStyles.mid },
  { id: 'm3', data: { label: 'Cybersecurity Policy Analyst', details: 'Job Openings: 2,500, Average Salary: $120,000', title: 'Mid-Level Role' }, position: { x: 550, y: 390 }, style: customNodeStyles.mid },
  { id: 'm4', data: { label: 'Third-Party Risk Assessor', details: 'Job Openings: 2,200, Average Salary: $115,000', title: 'Mid-Level Role' }, position: { x: 550, y: 560 }, style: customNodeStyles.mid },
  { id: 'm5', data: { label: 'Privacy Analyst (GDPR, CCPA, HIPPA, PCI-DSS)', details: 'Job Openings: 2,500, Average Salary: $74,751', title: 'Mid-Level Role' }, position: { x: 550, y: 730 }, style: customNodeStyles.mid },
  { id: 'm6', data: { label: 'Cybersecurity Auditor', details: 'Job Openings: 2,200, Average Salary: $120,360', title: 'Mid-Level Role' }, position: { x: 550, y: 900 }, style: customNodeStyles.mid },
  { id: 'm7', data: { label: 'Regulatory Compliance Manager', details: 'Job Openings: 2,800, Average Salary: $99,400', title: 'Mid-Level Role' }, position: { x: 550, y: 1070 }, style: customNodeStyles.mid },

  // Advanced-Level Roles (Column 4)
  { id: 'a1', data: { label: 'GRC Manager/Director', details: 'Job Openings: 1,800, Average Salary: $150,000', title: 'Advanced Role' }, position: { x: 800, y: 50 }, style: customNodeStyles.advanced },
  { id: 'a2', data: { label: 'Chief Risk Officer (CRO)', details: 'Job Openings: 1,200, Average Salary: $200,000', title: 'Advanced Role' }, position: { x: 800, y: 220 }, style: customNodeStyles.advanced },
  { id: 'a3', data: { label: 'Chief Compliance Officer (CCO)', details: 'Job Openings: 1,000, Average Salary: $190,000', title: 'Advanced Role' }, position: { x: 800, y: 390 }, style: customNodeStyles.advanced },
  { id: 'a4', data: { label: 'Chief Privacy Officer (CPO)', details: 'Job Openings: 800, Average Salary: $180,000', title: 'Advanced Role' }, position: { x: 800, y: 560 }, style: customNodeStyles.advanced },
  { id: 'a5', data: { label: 'Cybersecurity Auditor (Senior/Lead)', details: 'Job Openings: 1,100, Average Salary: $140,000', title: 'Advanced Role' }, position: { x: 800, y: 730 }, style: customNodeStyles.advanced },
  { id: 'a6', data: { label: 'Chief Information Security Officer (CISO)', details: 'Job Openings: 700, Average Salary: $250,000', title: 'Advanced Role' }, position: { x: 800, y: 900 }, style: customNodeStyles.advanced },
];

const initialEdges = [
  // Feeder to Entry
  { id: 'f1-e1', source: 'f1', target: 'e1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f2-e2', source: 'f2', target: 'e2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f3-e3', source: 'f3', target: 'e3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f4-e6', source: 'f4', target: 'e6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f5-e4', source: 'f5', target: 'e4', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f6-e6', source: 'f6', target: 'e6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f7-e5', source: 'f7', target: 'e5', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f8-e3', source: 'f8', target: 'e3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'f9-e7', source: 'f9', target: 'e7', style: { stroke: '#00FFFF', strokeWidth: 2 } },

  // Entry to Mid
  { id: 'e1-m2', source: 'e1', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e1-m1', source: 'e1', target: 'm1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e1-m3', source: 'e1', target: 'm3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e2-m2', source: 'e2', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e2-m7', source: 'e2', target: 'm7', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e2-m5', source: 'e2', target: 'm5', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e3-m1', source: 'e3', target: 'm1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e3-m4', source: 'e3', target: 'm4', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e3-m7', source: 'e3', target: 'm7', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e4-m6', source: 'e4', target: 'm6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e4-m1', source: 'e4', target: 'm1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e4-m2', source: 'e4', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e5-m5', source: 'e5', target: 'm5', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e5-m7', source: 'e5', target: 'm7', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e5-m2', source: 'e5', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e6-m4', source: 'e6', target: 'm4', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e6-m1', source: 'e6', target: 'm1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e6-m2', source: 'e6', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e7-m3', source: 'e7', target: 'm3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e7-m7', source: 'e7', target: 'm7', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'e7-m2', source: 'e7', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },

  // Mid to Advanced
  { id: 'm1-a1', source: 'm1', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm1-a2', source: 'm1', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm1-a3', source: 'm1', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm2-a1', source: 'm2', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm2-a3', source: 'm2', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm2-a4', source: 'm2', target: 'a4', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm3-a1', source: 'm3', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm3-a6', source: 'm3', target: 'a6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm3-a3', source: 'm3', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm4-a1', source: 'm4', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm4-a2', source: 'm4', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm4-a6', source: 'm4', target: 'a6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm5-m2', source: 'm5', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm5-a4', source: 'm5', target: 'a4', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm5-a1', source: 'm5', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm6-m1', source: 'm6', target: 'm1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm6-m2', source: 'm6', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm6-a1', source: 'm6', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm7-m2', source: 'm7', target: 'm2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm7-a1', source: 'm7', target: 'a1', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'm7-a3', source: 'm7', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },

  // Advanced to Advanced
  { id: 'a1-m7', source: 'a1', target: 'm7', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a1-a2', source: 'a1', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a1-a3', source: 'a1', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a2-a2', source: 'a2', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a2-a5', source: 'a2', target: 'a5', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a2-a3', source: 'a2', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a3-m5', source: 'a3', target: 'm5', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a3-a2', source: 'a3', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a3-a6', source: 'a3', target: 'a6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a4-m5', source: 'a4', target: 'm5', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a4-a3', source: 'a4', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a4-a6', source: 'a4', target: 'a6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a5-m6', source: 'a5', target: 'm6', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a5-a2', source: 'a5', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a5-a4', source: 'a5', target: 'a4', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a6-m7', source: 'a6', target: 'm7', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a6-a3', source: 'a6', target: 'a3', style: { stroke: '#00FFFF', strokeWidth: 2 } },
  { id: 'a6-a2', source: 'a6', target: 'a2', style: { stroke: '#00FFFF', strokeWidth: 2 } },
];

export default function CareerPathway() {
  const [hoveredNode, setHoveredNode] = useState(null);
const [width, setWidth] = useState(1000);
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  handleResize();

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [])

  // Show edges only for the hovered node
  const getVisibleEdges = useCallback(() => {
    if (!hoveredNode) return [];
    return initialEdges.filter((edge) => edge.source === hoveredNode);
  }, [hoveredNode]);

  // Hover handlers
  const onNodeMouseEnter = useCallback((event, node) => {
    setHoveredNode(node.id);
  }, []);

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null);
  }, []);

  // Prevent zooming on click and persist selection
  const onNodeClick = useCallback((event, node) => {
    event.stopPropagation();
    setHoveredNode(node.id);
  }, []);

  



  return (
    <div className="container" style={{ display: 'flex', flexDirection: width > 768 ? "row" : "column", height: '90vh', width: '100%',  minHeight: width < 768 ? '90vh' : '' }}>
      {/* ReactFlow Chart */}
      <div className="chart" style={{ width: width > 768 ? '70%' : '100%', height: width > 768 ? '100%' : '70%'}}>
       <div className="labels_container">
       <div className="label_container" >
        <p>Feeder Roles</p>
        <p>Entry Roles</p>
        <p>Mid-Level Roles</p>
        <p>Advanced Roles</p>
        </div>
       </div>
        <ReactFlow
          nodes={initialNodes}

          edges={getVisibleEdges()}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          onNodeClick={onNodeClick}
          fitView
          nodesDraggable={false}
          zoomOnScroll={false}
          panOnDrag={true} // Enable panning for mobile
          preventScrolling={true}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      {/* Sidebar */}
      <div className="sidebar" style={{ width: width > 768 ? '30%' : '100%', padding: '20px', borderLeft: '1px solid #ccc', overflowY: 'auto' }}>
        {hoveredNode ? (
          <>
            <h2>{initialNodes.find((n) => n.id === hoveredNode)?.data.label}</h2>
            <p><strong>Title:</strong> {initialNodes.find((n) => n.id === hoveredNode)?.data.title}</p>
            <p>{initialNodes.find((n) => n.id === hoveredNode)?.data.details}</p>
            <h3>{`${initialNodes.find((n) => n.id === hoveredNode)?.data.title === 'Advanced Role' ? "Previous Roles"  : "Next Steps:"}`}</h3>
            <ul>
              {getVisibleEdges().map((edge) => (
                <li key={edge.id}>
                  {initialNodes.find((n) => n.id === edge.target)?.data.label}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Hover or tap a role to see details</p>
        )}
      </div>
    </div>
  );
}
