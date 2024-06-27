import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useBattery } from "react-use";

const BatteryStatus = () => {
  const battery = useBattery();

  // Destructuring battery properties
  const { isSupported, level, charging, dischargingTime, chargingTime } =
    battery;
  const [batteryLevel, setBatteryLevel] = useState(level);
  const [isCharging, setIsCharging] = useState(charging);
  const [Supported, setSupported] = useState(isSupported);
  const [discharging, setDischarging] = useState(dischargingTime);

  useEffect(() => {
    if (!('getBattery' in navigator)) {
      setSupported(false);
      return;
    }

    const updateBatteryStatus = (battery) => {
      setBatteryLevel(battery.level * 100);
      setIsCharging(battery.charging);

      const handleLevelChange = () => setBatteryLevel(battery.level * 100);
      const handleChargingChange = () => setIsCharging(battery.charging);

      battery.addEventListener('levelchange', handleLevelChange);
      battery.addEventListener('chargingchange', handleChargingChange);

      return () => {
        battery.removeEventListener('levelchange', handleLevelChange);
        battery.removeEventListener('chargingchange', handleChargingChange);
      };
    };

    navigator.getBattery().then(updateBatteryStatus);
  }, []);

  const getBatteryColor = () => {
    if (isCharging) {
      return 'green';
    }
    if (Number(batteryLevel) <= 20) {
      return 'red';
    }
    return 'blue';
  };

  

  return (
    <div className="bg-white px-4 py-10 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Battery Status</h3>
      {!Supported ? (
        <p>Your browser does not support the Battery Status API.</p>
      ) : Number(batteryLevel) !== null ? (
        <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
          <CircularProgressbar
            value={Number(batteryLevel)}
            text={`${Number(batteryLevel).toFixed(0)}%`}
            styles={buildStyles({
              textColor: getBatteryColor(),
              pathColor: getBatteryColor(),
              trailColor: 'lightgrey',
            })}
          />
          <p className={`mt-2 text-center font-semibold ${isCharging ? 'text-green-500' : batteryLevel <= 20 ? 'text-red-500' : 'text-blue-500'}`}>
            {isCharging ? 'Charging' : 'Discharging'}
          </p>
          <p className="mt-2 text-center">{discharging}</p>
        </div>
      ) : (
        <p>Fetching...</p>
      )}
    </div>
  );
};

export default BatteryStatus;