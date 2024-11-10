import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-10 flex flex-wrap justify-center bg-slate-50 lg:justify-evenly p-4 lg:p-6 border-t-2 border-b-2 ${isSticky ? 'bg-black' : ''}`}>
            <span className="hidden lg:inline-block"></span>
            <span className="hidden lg:inline-block"></span>

            <span className="text-sm sm:text-lg lg:text-xl hover:text-blue-400 hover:cursor-pointer font-semibold m-2">Navbar</span>
            <span className="text-sm sm:text-lg lg:text-xl hover:text-blue-400 hover:cursor-pointer font-semibold m-2">Comment analysis</span>
            <span className="text-sm sm:text-lg lg:text-xl hover:text-blue-400 hover:cursor-pointer font-semibold m-2">Growth & interests</span>
            <span className="text-sm sm:text-lg lg:text-xl hover:text-blue-400 hover:cursor-pointer font-semibold m-2">Audience</span>

            <span className="hidden lg:inline-block"></span>
            <span className="hidden lg:inline-block"></span>
        </div>
    )
}

export default Navbar;
