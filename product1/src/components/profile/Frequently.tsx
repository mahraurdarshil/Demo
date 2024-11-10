import React from 'react'

const Frequently = () => {
  const hashtags = ["#xxxtentaciondoc"];
  const taggedAccounts = [
    "@hulu", "@thefader", "@makeouthill", "@allthesmokepictures",
    "@xxxtentacion", "@quintron", "@jmp", "@sabaahfolayan"
  ];
  return (
    <div className="flex w-full flex-col sm:flex-row gap-8 md:p-10 bg-white">
      <div className="flex w-full md:w-1/2 flex-col space-y-4 items-start">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
            #
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-800">Frequently used hashtags</h3>
            <p className="text-gray-500 text-md">
              Hashtags frequently used by the creator in their content
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((hashtag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-md">
              {hashtag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex w-full md:w-1/2 flex-col space-y-4 items-start">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
            @
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-800">Frequently tagged accounts</h3>
            <p className="text-gray-500 text-md">
              Accounts frequently tagged by the creator in their content
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {taggedAccounts.map((account, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-md">
              {account}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Frequently