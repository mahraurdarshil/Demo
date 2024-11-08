import React from 'react';

const UpgradeBanner = () => {
    return (
        <div className="bg-green-100 rounded-lg p-6 flex items-center space-x-6">

            <div className="relative flex items-center justify-center">
                <div className="w-28 h-28 bg-green-300 rounded-full flex items-center justify-center">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zM12 7a4 4 0 110-8 4 4 0 010 8z"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-0 right-0 bg-green-600 w-4 h-4 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col space-y-4 w-2/3'>
                <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold text-green-900">
                        Upgrade to check MAKE OUT HILL's content safety report
                    </h3>
                    <p className="text-gray-700">
                        The Safety Report reviews creators' content to ensure you select those who
                        won't harm your brand's reputation.
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="bg-green-800 text-white px-4 py-3 rounded-md font-semibold">
                        Upgrade
                    </button>
                    <p>or</p>
                    <a href="#" className="text-green-900 underline">
                        check a sample report
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpgradeBanner;
