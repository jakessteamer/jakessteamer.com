/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

export default function FabIcon() {
    const callJakeSteamer = () => {
        if (typeof window !== 'undefined') {
            window.open('tel:4328474600');
        }
    };
    return (
        <div className="mdc-position md:hidden">
            <div className="arrow bounce arrow-position" aria-hidden="true">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="32px"
                    width="32px"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                </svg>
            </div>
            <button
                className="mdc-fab"
                type="button"
                aria-label="Call Jake's Steamer"
                aria-pressed="false"
                onClick={callJakeSteamer}>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="faphonealt-icon"
                    height="32px"
                    width="32px"
                    xmlns="http://www.w3.org/2000/svg">
                    <a href="tel:+1432459220">
                        call
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                    </a>
                </svg>
            </button>
        </div>
    );
}
