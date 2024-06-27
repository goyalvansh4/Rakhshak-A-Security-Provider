import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//import './SystemScanner.css'; // Custom CSS for additional animations

const generateRandomFileName = () => {
  const names = [
    'Algorithm', 'BinaryTree', 'Compiler', 'DataStructure', 'Encryption',
    'Framework', 'GarbageCollector', 'HeapMemory', 'Interface', 'JVM', 
    'Kernel', 'Library', 'Microservice', 'Network', 'OpenSource', 
    'Protocol', 'Queue', 'Runtime', 'StackOverflow', 'Thread', 
    'Utility', 'VirtualMachine', 'WebAssembly', 'XMLParser', 
    'YAMLConfig', 'ZeroDayExploit'
  ];
  const fileExtensions = ['.pdf', '.doc', '.jpg', '.png', '.svg', '.webp', '.gif'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomExtension = fileExtensions[Math.floor(Math.random() * fileExtensions.length)];
  return `${randomName}${randomExtension}`;
};

const SystemScanner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [fileScanResults, setFileScanResults] = useState({
    totalFiles: 0,
    corruptedFiles: 0,
    files: [],
  });

  const startScan = () => {
    setIsLoading(true);
    setScanResults(null);
    setFileScanResults({ totalFiles: 0, corruptedFiles: 0, files: [] });

    const scanDuration = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    setTimeout(() => {
      setIsLoading(false);
      fetchSystemInformation();
      simulateFileScan();
    }, scanDuration);
  };

  const fetchSystemInformation = () => {
    const cpu = navigator.hardwareConcurrency || 'Information not available';
  };

  const simulateFileScan = () => {
    const totalFiles = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    const corruptedFiles = Math.floor(totalFiles * (Math.random()));
    const files = Array.from({ length: totalFiles }, (_, i) => ({
      name: generateRandomFileName(),
      isCorrupted: i < corruptedFiles,
    }));

    setFileScanResults({
      totalFiles,
      corruptedFiles,
      files,
    });
  };

  return (
    <div className="bg-[#111827] dark:text-white p-6 rounded shadow-md text-center">
      <h3 className="text-xl font-bold mb-4">System Scanner</h3>
      <button
        onClick={startScan}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center">
            <AiOutlineLoading3Quarters className="animate-spin mr-2" /> Scanning...
          </span>
        ) : (
          'Start Scan'
        )}
      </button>
      {isLoading && (
        <div className="mt-4 flex justify-center items-center">
          <CircularProgressbar
            value={100}
            text="Loading"
            styles={{
              root: { width: '50px', margin: 'auto' },
              text: { fontSize: '16px', fontWeight: 'bold', fill: '#3182ce' },
            }}
          />
        </div>
      )}
      {scanResults && (
        <div className="mt-8 flex flex-col gap-5 justify-center items-center">
          <h4 className="text-lg font-semibold mb-2">System Information:</h4>
          <div className="text-left flex flex-col gap-2 mb-4">
            <p><strong>CPU:</strong> {cpu}</p>
          </div>
        </div>
      )}
      {fileScanResults.totalFiles > 0 && (
        <div className="mt-8 flex flex-col gap-5 justify-center items-center">
          <h4 className="text-lg font-semibold mb-2">File Scan Results:</h4>
          <div className="text-left flex flex-col gap-2 mb-4 w-full max-w-md">
            <p><strong>Total Files:</strong> {fileScanResults.totalFiles}</p>
            <p><strong>Corrupted Files:</strong> {fileScanResults.corruptedFiles}</p>
            <p><strong>Uncorrupted Files:</strong> {fileScanResults.totalFiles - fileScanResults.corruptedFiles}</p>
            <ul className="list-none">
              {fileScanResults.files.map((file, index) => (
                <li key={index} className="flex items-center gap-2 p-2 bg-[#1f2937] rounded mb-2 transition-transform transform hover:scale-105">
                  {file.isCorrupted ? (
                    <AiFillCloseCircle className="text-red-500" />
                  ) : (
                    <AiFillCheckCircle className="text-green-500" />
                  )}
                  <span>{file.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemScanner;
