import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const professionalKeywords = [
  'https', 'google', 'flipkart', 'amazon', 'youtube', 'adobe', 'quantum',
  'cricbuzz', 'facebook', 'instagram', 'whatsapp', 'telegram', 'wikipedia'
];

const professionalDomains = ['.com', '.gov', '.org', '.in'];

const isValidURL = (url) => {
  const regex = /^(https?:\/\/)?(www\.)?([a-z0-9]+\.[a-z]{2,})([a-z0-9\/]+)?$/i;
  return regex.test(url);
};

const isSafeURL = (url) => {
  if (professionalKeywords.some(keyword => url.includes(keyword))) {
    return true;
  }
  if (professionalDomains.some(domain => url.endsWith(domain))) {
    return true;
  }
  return false;
};

const PhishingDetector = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState(''); // 'safe' or 'unsafe'

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setResult('');
    setStatus('');
  };

  const handleUrlScan = () => {
    if (!url) {
      toast.error('Please enter a URL.');
      setResult('Please enter a URL.');
      setStatus('');
      clearOutputAfterTimeout();
      return;
    }

    if (!isValidURL(url)) {
      toast.error('Please enter a valid URL.');
      setResult('Please enter a valid URL.');
      setStatus('');
      clearOutputAfterTimeout();
      return;
    }

    if (isSafeURL(url)) {
      setStatus('safe');
      setResult(`The URL "${url}" is safe.`);
      toast.success('URL is safe!');
    } else {
      setStatus('unsafe');
      setResult(`The URL "${url}" is unsafe. It does not belong to a trusted source.`);
      toast.error('URL is unsafe!');
    }

    // Clear the input field after scanning
    setUrl('');
    clearOutputAfterTimeout();
  };

  const clearOutputAfterTimeout = () => {
    setTimeout(() => {
      setResult('');
      setStatus('');
    }, 5000); // Clear output after 5 seconds
  };

  return (
    <div className="bg-white p-4 flex flex-col gap-5 rounded shadow-md text-center">
      <h3 className="text-xl font-bold mb-4">Phishing URL Detector</h3>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleUrlChange}
        className="border p-2 w-full"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 mt-2"
        onClick={handleUrlScan}
      >
        Check URL
      </button>
      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`mt-2 flex flex-col items-center gap-2 ${
            status === 'safe' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {status === 'safe' ? (
            <FaCheckCircle className="w-6 h-6" />
          ) : (
            <FaTimesCircle className="w-6 h-6" />
          )}
          <p>{result}</p>
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PhishingDetector;
