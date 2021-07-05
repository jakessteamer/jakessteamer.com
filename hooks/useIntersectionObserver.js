import React, { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const elementRef = useRef(null);

    const callbackFunction = ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        console.log(entry);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        // Check to see if ref is referencing a value other than null before observing
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, options]);
    return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
