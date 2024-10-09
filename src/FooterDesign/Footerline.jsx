import logo from '../headerLogo/logo.png';
import React, { useEffect, useState, useRef } from 'react';

const FooterLine = () => {
    const [animateLines, setAnimateLines] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimateLines(true);
                }
            },
            { threshold: 0.1 } 
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div ref={footerRef} className="flex items-center justify-center">
            <div
                className={`h-[1px] bg-white opacity-[40%] transition-all duration-1000 ease-in-out ${animateLines ? 'w-[35%]' : 'w-0'} mr-2`}
            ></div>

            <img
                src={logo}
                alt="Logo"
                className="w-36 cursor-pointer"
            />

            <div
                className={`h-[1px] bg-white opacity-[40%] transition-all duration-1000 ease-in-out ${animateLines ? 'w-[35%]' : 'w-0'} ml-2`}
            ></div>
        </div>
    );
};

export default FooterLine;
