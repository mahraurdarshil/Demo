"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/profile/navbar";
import { RiCake2Line } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { RiPlayListAddLine } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import ProfilePostCard from "@/components/profile/TopContent";
import CommentAnalysis from "@/components/profile/CommentAnalysis";
import { getUserData } from "@/helpers/backendConnect";
import { User } from "@/types/user";
import Loading from "@/components/Loading";
import GrowthAndIntrest from "@/components/profile/GrowthAndIntrest";
import Frequently from "@/components/profile/Frequently";
import Audience from "@/components/profile/Audience";
import AudienceDemographics from "@/components/profile/AudienceDemographics";
import AudienceInterests from "@/components/profile/AudienceInterests";
import FollowerTypes from "@/components/profile/FollowerTypes";
import SimilarCreator from "@/components/profile/SimilarCreator";
import UpgradeBanner from "@/components/profile/Updates";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getUserData(1);
      setUser(data);
    }

    fetchData();
  }, []);

  if (!user) {
    return <Loading />
  }

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
                src={user?.profileImage || "/images/profile.jpg"}
                alt="Profile"
                width={200}
                height={200}
              />
              <div className="ml-0 lg:ml-4 mt-4 lg:mt-0 space-y-4 text-center lg:text-left">
                <div className="text-lg sm:text-3xl font-bold">
                  {user?.name}
                </div>
                <div className="text-gray-900 flex items-center justify-center lg:justify-start space-x-2">
                  <span>{user?.username}</span>
                  <FaInstagram color="red" />
                </div>
                <div className="text-gray-500 w-full sm:w-5/6">
                  {user?.bio}
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
                <div
                  onClick={toggleDropdown}
                  className="flex items-center cursor-pointer"
                >
                  <IoIosShareAlt size={30} />
                  <span className="text-lg"> Share</span>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg animate-fadeIn z-10">
                    <ul className="py-2 text-gray-700">
                      <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors">
                        Share link
                      </li>
                      <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors">
                        Download PDF
                      </li>
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
                <RiCake2Line
                  size={50}
                  className="bg-slate-50 rounded-full p-2"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span>Creator's age</span>
                <span className="text-lg font-semibold">{user.age}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 w-full sm:w-auto">
              <div>
                <IoLanguage
                  size={50}
                  className="bg-slate-50 rounded-full p-2"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span>Language spoken</span>
                <span className="text-lg font-semibold">
                  {user?.language}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-gray-600 w-full sm:w-auto">
              <span>Gender</span>
              <span className="text-lg font-semibold">{user?.gender}</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 w-full sm:w-auto">
              <span>Account type</span>
              <span className="text-lg font-semibold">
                {user?.accountType}
              </span>
            </div>
          </div>
        </div>
        <Navbar />
        <div className="overflow-x-auto mt-5 mb-5">
          <div className="text-gray-900 font-semibold text-2xl mb-2 ml-5">Top post</div>
          <div className="flex space-x-4 px-4">
            {user?.topPosts.map((post, index) => (
              <div className="flex-shrink-0 w-1/3" key={index}>
                <ProfilePostCard post={post} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">

          <hr className="w-full border-1" />
          <CommentAnalysis data={user} />
          <hr className="w-full border-1 " />
          <div className="p-10">
            <UpgradeBanner />
          </div>
          <hr className="w-full border-1 " />
          <GrowthAndIntrest data={user}/>
          <hr className="w-full border-1" />
          <Frequently />
          <hr className="w-full border-1" />
          <Audience />
          <hr className="w-full border-1" />
          <AudienceDemographics data={user} />
          <hr className="w-full border-1" />
          <AudienceInterests />
          <hr className="w-full border-1" />
          <FollowerTypes data={user}/>
          <hr className="w-full border-1" />
          <SimilarCreator />
          <hr className="w-full border-1" />
        </div>
        <div className="h-32 w-32"></div>
      </div>
    </div>
  );
};

export default Dashboard;
