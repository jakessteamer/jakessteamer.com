// The handler to smoothly scroll the element into view
import { useRouter } from 'next/router';

const navigateToSection = (href) => {
  const router = useRouter();
  router.push(href);
  if (typeof window !== 'undefined') {
    const element = document.getElementById(window.location.hash);
    if (element) {
      // Smooth scroll to that elment
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
};

export default navigateToSection;
