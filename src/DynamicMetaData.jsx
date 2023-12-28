import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DynamicMetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'Default Title';
    let description = 'Default Description';

    // Set metadata dynamically
    document.title = title;
    const metaTags = [
      { name: 'description', content: description },
    ];

    const head = document.head;
    metaTags.forEach(({ name, content }) => {
      const existingTag = head.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', name);
        newTag.setAttribute('content', content);
        head.appendChild(newTag);
      }
    });

    // Cleanup function (optional)
    return () => {
      metaTags.forEach(({ name }) => {
        const existingTag = head.querySelector(`meta[name="${name}"]`);
        if (existingTag) {
          head.removeChild(existingTag);
        }
      });
    };
  }, [location.pathname]);

  return <Helmet />;
};

export default DynamicMetaTags;
