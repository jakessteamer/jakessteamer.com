import { useEffect } from 'react';
import { withRouter } from 'next/router';

const ScrollHandler = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(window.location.hash);
    console.log(element);
    if (element) {
      // Smooth scroll to that elment
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, [location]);

  return null;
};

export default withRouter(ScrollHandler);
