/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Anchor = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a
      href={href}
      onClick={navigateToSection}
      className="inline-block brand-blue no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
      ref={ref}
    >
      Services
    </a>
  );
});

const NavLink = () => {
  // const router = useRouter();
  // const navigateToSection = () => {
  //   router.push(href);
  //   if (typeof window !== 'undefined') {
  //     const element = document.getElementById(window.location.hash);
  //     if (element) {
  //       // Smooth scroll to that elment
  //       element.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  //         inline: 'nearest'
  //       });
  //     }
  //   }
  // };
  return <Anchor />;
};

export default NavLink;
