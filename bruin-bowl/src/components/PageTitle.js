import React, { useEffect } from 'react';

function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Since this component doesn't render anything, return null
  return null; 
}

export default PageTitle;
