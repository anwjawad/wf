"use client";

import React, { useCallback, useMemo } from 'react';
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, BackgroundVariant, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Workflow, WorkflowStep } from '@/types';
import { WorkflowNode } from './WorkflowNode';

interface WorkflowDiagramProps {
  workflow: Workflow;
}

const nodeTypes = {
  customNode: WorkflowNode,
};

// Extremely simple layout algorithm for demo purposes
// In a real app we would use dagre or elK for auto-layout
const generateNodesAndEdges = (workflow: Workflow) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  let currentY = 50;
  let currentX = 250;
  
  workflow.steps.forEach((step, index) => {
    // Generate Node
    nodes.push({
      id: step.id,
      type: 'customNode',
      position: { x: currentX, y: currentY },
      data: { 
        step, 
        colorClass: step.type === 'decision' ? 'border-medical-orange' : 
                   step.type === 'start' || step.type === 'end' ? 'border-slate-800' :
                   'border-slate-200'
      },
    });

    // Generate Edges
    if (step.nextSteps) {
      step.nextSteps.forEach(targetId => {
        edges.push({
          id: `e-${step.id}-${targetId}`,
          source: step.id,
          target: targetId,
          animated: true,
          style: { stroke: '#94a3b8', strokeWidth: 2 }
        });
      });
    }
    
    if (step.yesStep) {
      edges.push({
        id: `e-${step.id}-${step.yesStep}-yes`,
        source: step.id,
        target: step.yesStep,
        animated: true,
        label: 'Yes',
        style: { stroke: '#10b981', strokeWidth: 2 }
      });
    }
    
    if (step.noStep) {
      edges.push({
        id: `e-${step.id}-${step.noStep}-no`,
        source: step.id,
        target: step.noStep,
        animated: true,
        label: 'No',
        style: { stroke: '#ef4444', strokeWidth: 2 }
      });
    }

    currentY += 180;
    
    // Quick hack for branch positioning
    if (step.type === 'decision') {
      currentX += 350; // offset right branch
      currentY -= 180; // keep same Y for branching
    } else if (index % 3 === 0) {
      currentX = 250; // reset to main trunk
    }
  });

  return { initialNodes: nodes, initialEdges: edges };
};

export function WorkflowDiagram({ workflow }: WorkflowDiagramProps) {
  const { initialNodes, initialEdges } = useMemo(() => generateNodesAndEdges(workflow), [workflow]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[600px] border rounded-xl shadow-inner bg-slate-50/50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        className="bg-slate-50/50"
      >
        <Controls />
        <MiniMap zoomable pannable nodeClassName="bg-medical-blue rounded-full" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
