"use client"
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import React, { useState } from 'react';
import Performance from '@/components/profile/performance';
import { RiCake2Line } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { RiPlayListAddLine } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-0">
      <div className="flex flex-col items-center lg:items-start justify-between">
        <div className="w-full text-xs sm:text-lg text-center mt-2 text-gray-600">
          Last updated on Oct 24, 2024
        </div>
        <hr className="w-full border-1 mt-4" />
      </div>

      <div className="mt-6">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row w-full">
            {/* Profile Info */}
            <div className="flex w-full lg:w-2/3 flex-col lg:flex-row items-center lg:items-start">
              <Image
                className="rounded-full"
                src="/profile/p1.jpg"
                alt="Profile"
                width={200}
                height={200}
              />
              <div className="ml-0 lg:ml-4 mt-4 lg:mt-0 space-y-4 text-center lg:text-left">
                <div className="text-lg sm:text-3xl font-bold">MAKE OUT HILL</div>
                <div className="text-gray-900 flex items-center justify-center lg:justify-start space-x-2">
                  <span>@xxxtentacion</span>
                  <FaInstagram color="red" />
                </div>
                <div className="text-gray-500 w-full sm:w-5/6">
                  Bio: "long live jahseh" account managed by his management team
                </div>
              </div>
            </div>

            {/* Add to List and Share */}
            <div className="w-full lg:w-1/3 flex mt-4 lg:mt-0 space-x-6 items-start justify-center lg:justify-end relative">
              <div className="flex items-center space-x-2 cursor-pointer">
                <RiPlayListAddLine size={30} />
                <span className="text-lg">Add to list</span>
              </div>

              <div className="flex items-center space-x-2 relative">
                <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
                  <IoIosShareAlt size={30} />
                  <span className="text-lg"> Share</span>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg animate-fadeIn z-10">
                    <ul className="py-2 text-gray-700">
                      <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors">Share link</li>
                      <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors">Download PDF</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap mt-6 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-12">
            <div className="flex items-center space-x-2 text-gray-600 w-full sm:w-auto">
              <div>
                <RiCake2Line size={50} className="bg-slate-50 rounded-full p-2" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span>Creator's age</span>
                <span className="text-lg font-semibold">Between 25-34 years</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 w-full sm:w-auto">
              <div>
                <IoLanguage size={50} className="bg-slate-50 rounded-full p-2" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span>Language spoken</span>
                <span className="text-lg font-semibold">English</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-gray-600 w-full sm:w-auto">
              <span>Gender</span>
              <span className="text-lg font-semibold">Male</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 w-full sm:w-auto">
              <span>Account type</span>
              <span className="text-lg font-semibold">Business</span>
            </div>
          </div>
        </div>

        {/* Performance Component */}
        <Performance />
      </div>
    </div>
  );
};

export default Dashboard;
