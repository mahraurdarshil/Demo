// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div className="text-sm sm:text-lg text-gray-600">
          Last updated on Oct 24, 2024
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center flex-wrap">
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
            src="https://via.placeholder.com/80" // Replace with actual image source
            alt="Profile"
          />
          <div className="ml-4 sm:ml-6">
            <div className="text-lg sm:text-2xl font-bold">MAKE OUT HILL</div>
            <div className="text-gray-500">@xxxtentacion</div>
            <div className="text-gray-500">Bio: "long live jahseh" account managed by his management team</div>
          </div>
        </div>
        
        <div className="flex mt-6 space-x-4 sm:space-x-6 flex-wrap">
          <div className="flex flex-col items-center text-gray-600">
            <span>Creator's age</span>
            <span className="text-lg font-semibold">Between 25-34 years</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <span>Language spoken</span>
            <span className="text-lg font-semibold">English</span>
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

        <div className="mt-6">
          <div className="text-lg sm:text-xl font-semibold">Performance</div>
          <div className="flex mt-4 space-x-4 sm:space-x-6 flex-wrap">
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-bold">20.82M</span>
              <div className="text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-bold">160.78%</span>
              <div className="text-gray-500">Engagement rate</div>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-bold">33.48M</span>
              <div className="text-gray-500">Average likes per post</div>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-bold">10.77M</span>
              <div className="text-gray-500">Average comments per post</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
