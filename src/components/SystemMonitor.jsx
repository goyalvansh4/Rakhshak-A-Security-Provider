import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SystemMonitor = () => {
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [pathColor, setPathColor] = useState("lightgreen");

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching memory usage
      const newMemoryUsage = Math.random() * 100;
      setMemoryUsage(newMemoryUsage);
      // Change path color based on memory usage
      if (newMemoryUsage > 80) {
        setPathColor('green'); // High usage, red color
      } else if (newMemoryUsage > 50) {
        setPathColor('orange'); // Moderate usage, orange color
      } else {
        setPathColor('red'); // Normal usage, green color
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">System Monitor</h3>
      <p>Memory Usage: <span className="text-lg font-bold" style={{ color: pathColor }}>{memoryUsage.toFixed(2)}%</span></p>
      <div style={{ width: '100px', margin: '0 auto' }}>
        <CircularProgressbar
          value={memoryUsage}
          text={`${memoryUsage.toFixed(2)}%`}
          styles={buildStyles({
            textColor: pathColor,
            pathColor: pathColor,
            trailColor: 'lightgrey',
            strokeLinecap: 'round', // Smooth animation
          })}
        />
      </div>
    </div>
  );
};

export default SystemMonitor;
