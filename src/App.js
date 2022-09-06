import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from 'pages/Home';

const App = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="*" element={<Navigate to="home" replace />} />
  </Routes>
);

export default App;
