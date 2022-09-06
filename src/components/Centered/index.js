import React from 'react';
import './centered.css';

const Centered = ({ children }) => (
  <div className="centered">
    <span className="centered__content">{children}</span>
  </div>
)

export default Centered;
