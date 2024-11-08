import React from 'react';

const creators = [
  { name: "cleo_ohsojazzy", followers: "1.82M", image: "/similar/p1.webp", verified: true },
  { name: "badvibesforeverofficial", followers: "978.42K", image: "/similar/p2.webp", verified: false },
  { name: "lilpeep", followers: "8.07M", image: "/similar/p3.webp", verified: true },
  { name: "lilpump", followers: "13.81M", image: "/similar/p4.webp", verified: true },
  { name: "badvibesforeverbrand", followers: "540.2K", image: "/similar/p5.webp", verified: true },
];

const CreatorCard = ({ name, followers, image, verified }: {
  name: string;
  followers: string;
  image: string;
  verified: boolean;
}) => (
  <div className="flex items-center space-x-3">
    <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
    <div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-gray-800">{name}</span>
        {verified && <span className="text-blue-500">✔️</span>}
      </div>
      <p className="text-gray-500 text-sm">{followers} followers</p>
    </div>
  </div>
);

const SimilarCreator = () => {
  return (
    <div className="p-6">
      <h3 className="font-bold text-gray-800 text-lg mb-4">Creators with similar audience</h3>
      <div className="flex flex-wrap gap-8">
        {creators.map((creator, index) => (
          <CreatorCard key={index} {...creator} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCreator;
