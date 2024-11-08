import React from 'react'

const Frequently = () => {
  const hashtags = ["#xxxtentaciondoc"];
  const taggedAccounts = [
    "@hulu", "@thefader", "@makeouthill", "@allthesmokepictures",
    "@xxxtentacion", "@quintron", "@jmp", "@sabaahfolayan"
  ];
  return (
    <div className="flex w-full flex-col sm:flex-row gap-8 p-6 bg-white">
      {/* Frequently Used Hashtags */}
      <div className="flex w-1/2 flex-col items-start">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
            #
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Frequently used hashtags</h3>
            <p className="text-gray-500 text-sm">
              Hashtags frequently used by the creator in their content
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((hashtag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {hashtag}
            </span>
          ))}
        </div>
      </div>

      {/* Frequently Tagged Accounts */}
      <div className="flex w-1/2 flex-col items-start">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
            @
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Frequently tagged accounts</h3>
            <p className="text-gray-500 text-sm">
              Accounts frequently tagged by the creator in their content
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {taggedAccounts.map((account, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {account}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Frequently