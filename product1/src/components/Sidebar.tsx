// Sidebar.js
import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }:
    SidebarProps
) => {
    return (
        <div
            className={`bg-gray-100 fixed lg:static top-0 left-0 h-full w-64 p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200 lg:translate-x-0 z-50`}
        >
            <button
                onClick={toggleSidebar}
                className="lg:hidden absolute top-4 right-4 text-2xl"
            >
                ✕
            </button>
            <div className="text-2xl font-semibold text-indigo-600 mb-8">Insightia</div>
            <div className="space-y-4">
                <div className="flex items-center text-gray-700 cursor-pointer">
                    <span className="text-xl">🔍</span>
                    <span className="ml-4">Creator search</span>
                </div>
                <div className="flex items-center text-gray-700 cursor-pointer">
                    <span className="text-xl">👥</span>
                    <span className="ml-4">Creator onboarding</span>
                </div>
                <div className="flex items-center text-gray-700 cursor-pointer">
                    <span className="text-xl">📈</span>
                    <span className="ml-4">Campaigns</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
