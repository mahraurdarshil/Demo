import React from 'react';

const Performance = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Performance</h1>
            <div className="w-full grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">80</span>
                    <span className="text-gray-600">Followers</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">160</span>
                    <span className="text-gray-600">Engagement rate</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">Value</span>
                    <span className="text-gray-600">Sponsored posts performance</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">33.48M</span>
                    <span className="text-gray-600">Average likes per post</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">10.77M</span>
                    <span className="text-gray-600">Average comments per post</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">Value</span>
                    <span className="text-gray-600">Average views per video</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-xl font-semibold">Value</span>
                    <span className="text-gray-600">Average views per reel</span>
                </div>
            </div>
        </div>
    );
}

export default Performance;
