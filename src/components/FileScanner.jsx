import React, { useState } from 'react';
import axios from 'axios';
import { FaFileAlt, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileScanner = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [status, setStatus] = useState(''); // 'healthy' or 'infected'
  const [scanning, setScanning] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setResult('');
    setStatus('');
    if (uploadedFile) {
      toast.success(`File "${uploadedFile.name}" uploaded successfully`);
    }
  };

  const handleFileScan = () => {
    if (!file) {
      toast.error('Please select a file.');
      setResult('Please select a file.');
      setStatus('');
      return;
    }

    setScanning(true);

    // Simulate scanning process
    setTimeout(() => {
      const fileName = file.name;

      // Random infection status
      const isInfected = Math.random() < 0.5;

      const message = isInfected
        ? `The file "${fileName}" is infected.`
        : `The file "${fileName}" is healthy.`;

      setStatus(isInfected ? 'infected' : 'healthy');
      setResult(message);
      setScanning(false);
      setFile(null);
    }, 2000); // Simulate scanning delay
  };

  return (
    <div className="bg-white p-4 flex flex-col items-center gap-2 justify-center rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">File Scanner</h3>
      <label
        htmlFor="uploadFile1"
        className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
      >
        <FaFileAlt className="w-16 h-16 mb-2 fill-gray-500" />
        Upload file
        <input type="file" id="uploadFile1" onChange={handleFileChange} className="hidden w-full" />
        <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG, SVG, WEBP, and GIF are allowed.</p>
      </label>
      {file && <p className="mt-2 text-sm text-gray-700">Selected file: {file.name}</p>}
      <button 
        className="bg-blue-600 text-white px-4 py-2 mt-2 flex items-center gap-2" 
        onClick={handleFileScan} 
        disabled={scanning}
      >
        {scanning ? <FaSpinner className="animate-spin" /> : 'Scan File'}
      </button>
      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`mt-2 flex items-center gap-2 ${
            status === 'healthy' ? 'text-green-500' : status === 'infected' ? 'text-red-500' : ''
          }`}
        >
          {status === 'healthy' ? <FaCheckCircle className="w-6 h-6" /> : <FaTimesCircle className="w-6 h-6" />}
          <p>{result}</p>
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

export default FileScanner;
