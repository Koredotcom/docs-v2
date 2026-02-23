import React, { useState, useEffect } from 'react';

export const FeedbackLink = ({ children }) => {
  const [fullUrl, setFullUrl] = useState('');

  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window !== 'undefined') {
      setFullUrl(encodeURIComponent(window.location.href));
    }
  }, []);

  const formBase = "https://docs.google.com/forms/d/e/1FAIpQLScS7Iv0uIYXSdxhZtwzxVZi4K0pg0-7dX23xIQ0CF56YvIAzg/viewform";
  const entryId = "entry.1427399686"; 

  return (
    <a 
      href={`${formBase}&${entryId}=${fullUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      className="feedback-button"
      style={{ 
        display: 'inline-block', 
        padding: '10px 15px', 
        backgroundColor: '#0070f3', 
        color: 'white', 
        borderRadius: '5px',
        textDecoration: 'none' 
      }}
    >
      {children || "Report an issue on this page"}
    </a>
  );
};