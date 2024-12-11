import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CreateTontine from './pages/CreateTontine';
import JoinTontine from './pages/JoinTontine';
import Loans from './pages/Loans';
import History from './pages/History';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="flex-1 p-4 md:p-6 pt-4 overflow-x-hidden">
            <div className="container mx-auto max-w-7xl">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-tontine" element={<CreateTontine />} />
                <Route path="/join-tontine" element={<JoinTontine />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/history" element={<History />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;