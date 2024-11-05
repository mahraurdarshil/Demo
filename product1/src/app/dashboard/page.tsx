// Dashboard.js
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import React from 'react';
import Performance from '@/components/profile/performance';
import { RiCake2Line } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";


const Dashboard = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-0">
      <div className="flex flex-col items-center justify-between">
        <div className="w-full m-0 p-0 text-xs text-center mt-2 sm:text-lg text-gray-600">
          Last updated on Oct 24, 2024
        </div>
        <hr className="w-full border-1 mt-4" />
      </div>

      <div className="mt-6">
        <div className='flex w-full p-6'>

          <div className='w-2/3'>
            <div className="flex flex-wrap">
              <Image
                className="rounded-full"
                src="/profile/p1.jpg"
                alt="Profile"
                width={200}
                height={200}
              />
              <div className="ml-4 mt-2 sm:ml-6 space-y-4">
                <div className="text-lg sm:text-3xl font-bold">MAKE OUT HILL</div>
                <div className="text-gray-900 flex felx-col items-center space-x-2"><span>@xxxtentacion</span> <FaInstagram color='red' /></div>
                <div className="text-gray-500 w-5/6">Bio: "long live jahseh" account managed by his management team</div>
              </div>
            </div>
            <div className="flex mt-6 space-x-4 sm:space-x-12 flex-wrap">
              <div className="flex items-center space-x-2 text-gray-600">
                <div>
                  <RiCake2Line size={50} className='bg-slate-50 rounded-full p-2'/>
                </div>
                <div className='flex flex-col items-start'>
                  <span>Creator's age</span>
                  <span className="text-lg font-semibold">Between 25-34 years</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div>
                  <IoLanguage size={50} className='bg-slate-50 rounded-full p-2'/>
                </div>
                <div className='flex flex-col items-start'>
                  <span>Language spoken</span>
                  <span className="text-lg font-semibold">English</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-gray-600">
                <span>Gender</span>
                <span className="text-lg font-semibold">Male</span>
              </div>
              <div className="flex flex-col items-center text-gray-600">
                <span>Account type</span>
                <span className="text-lg font-semibold">Business</span>
              </div>
            </div>
          </div>
          <div className='w-1/3'>
            hello
          </div>
        </div>


        <Performance />

      </div>
    </div>
  );
};

export default Dashboard;
