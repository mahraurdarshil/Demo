import Image from 'next/image';
import React from 'react';

const UpgradeBanner = () => {
    return (
        <div className="bg-[#d4ffed] rounded-lg p-6 flex items-center space-x-6">

            <div className="relative flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">

                   <Image src='/icons/pumpkin.png' width={150} height={150} alt='img'/>
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
                    <button className="bg-[#014550] text-white px-4 py-3 rounded-md font-semibold">
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
