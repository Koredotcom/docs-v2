import React, { useState, useEffect } from 'react';

export const FeedbackLink = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // This ensures the code only runs in the browser, not during the build 
    if (typeof window !== 'undefined') {
      setCurrentUrl(encodeURIComponent(window.location.href));
    }
  }, []);

  // Update these with your specific Google Form details 
  const formBase = "https://docs.google.com/forms/d/e/1FAIpQLScS7Iv0uIYXSdxhZtwzxVZi4K0pg0-7dX23xIQ0CF56YvIAzg/viewform";
  const entryId = "entry.1427399686"; // The ID for your 'URL' field 
  
  const fullHref = `${formBase}&${entryId}=${currentUrl}`;

  return (
    <a 
      href={fullHref}
      target="_blank" 
      rel="noopener noreferrer"
      className="feedback-cta-button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '6px',
        fontWeight: '600',
        textDecoration: 'none',
        marginTop: '20px'
      }}
    >
      {/* If you put text between tags in MDX, it shows up here  */}
      {children || "Report an issue on this page"}
    </a>
  );
};