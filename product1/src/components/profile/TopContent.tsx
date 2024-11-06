import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { Post } from "@/types/user";
import Image from "next/image";

const ProfilePostCard = ({ post }: { post: Post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
      {/* Top Section with Profile Icon, Time, and Instagram Logo */}
      <div className="relative flex items-center justify-between p-4 bg-gray-100">
        <BsPersonCircle className="text-3xl text-gray-600" />
        <div className="text-gray-500 text-sm">{post.time}</div>
        <FaInstagram className="text-pink-600 text-2xl" />
      </div>

      {/* Main Photo */}
      <div className="relative">
        <Image src={post.imageUrl} alt="Profile" width={400} height={400} />
      </div>

      {/* Caption Section */}
      <div className="p-4">
        <p className="text-gray-700 text-base">{post.caption}</p>
      </div>

      {/* Likes and Comments Section */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-t">
        <div className="flex items-center space-x-1 text-gray-600">
          <AiOutlineHeart className="text-xl" />
          <span className="text-sm font-semibold">{post.likes} Likes</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <AiOutlineComment className="text-xl" />
          <span className="text-sm font-semibold">
            {post.comments} Comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePostCard;
