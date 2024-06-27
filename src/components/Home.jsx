import React from 'react';
import FileScanner from './FileScanner';
import PhishingDetector from './PhishingDetector';
import SystemMonitor from './SystemMonitor';
import BatteryStatus from './BatteryStatus';

const Home = () => (
  <div className="p-4 bg-[#111827]">
    <h2 className="text-2xl text-white font-bold mb-4">Welcome to Security Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SystemMonitor />
      <BatteryStatus />
      <FileScanner />
      <PhishingDetector />
    </div>
  </div>
);

export default Home;
