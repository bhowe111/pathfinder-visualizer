import React, { useState, useEffect, Component } from "react";
import Node from "./Node/Node";

import "./PathfindingVisualizer.css";

const PathfindingVisualizer = () => {
  const [nodes, setNodes] = useState([]);

  return (
    <>
      <div>Visualizer</div>
      <Node />
    </>
  );
};

export default PathfindingVisualizer;
