/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function SVGDivider(props) {
    return (
        <div className="mt-9 md:mt-none w-full relative ">
            <div className="custom-shape-divider-bottom-1612037810">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    {...props}>
                    <path
                        d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 010 27.35V120h1200V95.8c-67.81 23.12-144.29 15.51-214.34-2.97z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </div>
    );
}
