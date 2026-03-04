import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoginScreen from './pages/LoginScreen';
import DashboardScreen from './pages/DashboardScreen';
import ScanDetailScreen from './pages/ScanDetailScreen';
import PlaceholderScreen from './pages/PlaceholderScreen';
import { FolderRoot, Calendar, Bell, Settings, LifeBuoy } from 'lucide-react';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/scan/:id" element={<ScanDetailScreen />} />

          {/* Placeholder Routes */}
          <Route path="/projects" element={<PlaceholderScreen title="Projects" icon={FolderRoot} />} />
          <Route path="/schedule" element={<PlaceholderScreen title="Schedule" icon={Calendar} />} />
          <Route path="/notifications" element={<PlaceholderScreen title="Notifications" icon={Bell} />} />
          <Route path="/settings" element={<PlaceholderScreen title="Settings" icon={Settings} />} />
          <Route path="/support" element={<PlaceholderScreen title="Support" icon={LifeBuoy} />} />

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
