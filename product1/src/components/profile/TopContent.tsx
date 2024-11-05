import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

const ProfilePostCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
            {/* Top Section with Profile Icon, Time, and Instagram Logo */}
            <div className="relative flex items-center justify-between p-4 bg-gray-100">
                <BsPersonCircle className="text-3xl text-gray-600" />
                <div className="text-gray-500 text-sm">
                    12:30 PM, Oct 24, 2024
                </div>
                <FaInstagram className="text-pink-600 text-2xl" />
            </div>

            {/* Main Photo */}
            <div className="relative">
                <img
                    src="https://via.placeholder.com/400x400"
                    alt="Post"
                    className="w-full h-64 object-cover"
                />
            </div>

            {/* Caption Section */}
            <div className="p-4">
                <p className="text-gray-700 text-base">
                    "Long live Jahseh, in memory of a legend 🌹 #xxxtentacion #legacy #neverforgotten"
                </p>
            </div>

            {/* Likes and Comments Section */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-t">
                <div className="flex items-center space-x-1 text-gray-600">
                    <AiOutlineHeart className="text-xl" />
                    <span className="text-sm font-semibold">12.3k Likes</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                    <AiOutlineComment className="text-xl" />
                    <span className="text-sm font-semibold">524 Comments</span>
                </div>
            </div>
        </div>
    );
};

export default ProfilePostCard;
