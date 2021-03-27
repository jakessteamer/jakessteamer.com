/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { FaArrowDown, FaPhoneAlt } from 'react-icons/fa';

export default function FabIcon() {
  const callCompany = () => {
    if (typeof window !== 'undefined') {
      window.open('tel:4328474600');
    }
  };
  return (
    <div className="fab-wrapper md:hidden">
      <div className="arrow bounce">
        <FaArrowDown />
      </div>
      <div
        className="fab"
        onClick={() => {
          callCompany();
        }}
      >
        <div className="mainop">
          <a
            className="font-bold leading-tight hero-headline brand-blue"
            href="tel:+14328474600"
          >
            <FaPhoneAlt className="faphonealt-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
