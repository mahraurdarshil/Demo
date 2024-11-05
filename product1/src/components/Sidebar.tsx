"use client"
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineCampaign } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { BsCodeSlash } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed top-0 left-0 h-screen text-white z-50'>
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden text-2xl m-4"
            >
               <HiOutlineBars3 color='black'/>
            </button>

            {/* Sidebar */}
            <div
                className={`bg-gray-50 h-screen lg:bg-white fixed lg:static top-0 left-0 w-72 p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-200 lg:translate-x-0 z-50 border-r-2 flex flex-col`}
            >
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden absolute top-4 right-4 text-2xl"
                >
                    <RxCross2 color='black'/>
                </button>
                <div className="text-3xl font-semibold text-indigo-500 mb-12">
                    Falcon Insights
                </div>

                {/* Flex container to push Option 2 to the bottom */}
                <div className="flex flex-col flex-grow justify-between">
                    {/* Option 1 (Top Section) */}
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 cursor-pointer">
                            <IoSearch size={30} />
                            <span className="ml-4 text-lg">Talk to us</span>
                        </div>
                        <div className="flex items-center text-gray-700 cursor-pointer">
                            <GoPeople size={30} />
                            <span className="ml-4 text-lg">For developers</span>
                        </div>
                        <div className="flex items-center text-gray-700 cursor-pointer">
                            <MdOutlineCampaign size={30} />
                            <span className="ml-4 text-lg">Your account</span>
                        </div>
                    </div>

                    {/* Option 2 (Bottom Section) */}
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 cursor-pointer">
                            <MdPhoneInTalk size={30} />
                            <span className="ml-4 text-lg">Creator search</span>
                        </div>
                        <div className="flex items-center text-gray-700 cursor-pointer">
                            <BsCodeSlash size={30} />
                            <span className="ml-4 text-lg">Creator onboarding</span>
                        </div>
                        <div className="flex items-center text-gray-700 cursor-pointer">
                            <VscAccount size={30} />
                            <span className="ml-4 text-lg">Campaigns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
