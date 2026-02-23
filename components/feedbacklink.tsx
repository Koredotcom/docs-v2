import { useCallback } from 'react';

export default function FeedbackLink({ children }) {
  const handleClick = useCallback((event) => {
    event.preventDefault();

    const BASE_URL =
      'https://docs.google.com/forms/d/e/1FAIpQLScS7Iv0uIYXSdxhZtwzxVZi4K0pg0-7dX23xIQ0CF56YvIAzg/viewform?entry.1427399686=';

    const feedbackUrl = BASE_URL + window.location.href;

    window.open(feedbackUrl);
  }, []);

  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
}