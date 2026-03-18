// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Dashboard from './components/Dashboard.jsx';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Dashboard />
//     </BrowserRouter>
//   );
// }

// export default App;

// dashboard/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Apps from './components/Apps.jsx'; // Make sure the path is correct
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This renders Dashboard when you are at the root (/) */}
        <Route path="/" element={<Dashboard />} />
        
        {/* This renders Dashboard when you go to /dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* This renders Apps when you go to /apps */}
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;