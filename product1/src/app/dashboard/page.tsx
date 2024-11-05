"use client"
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';


const MainPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1">
                <button
                    className="lg:hidden p-4 text-2xl"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>
                <Dashboard />
            </div>
        </div>
    );
};

export default MainPage;
