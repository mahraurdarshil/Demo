export type User = {
  name: string;
  username: string;
  bio: string;
  age: string;
  language: string;
  gender: string;
  accountType: string;
  profileImage: string;
  topPosts: Post[];
  AudienceSentiment: {
    id: number;
    heading: string;
    subHeading: string;
    value: number;
  };
  intentToBuyProduct: {
    id: number;
    heading: string;
    subHeading: string;
    value: number;
  };
  followersType: {
    id: number;
    heading: string;
    subHeading: string;
    totalFollowers: number;
    types: followersTypes[];
  };
  audienceDemographics: {
    id: number;
    heading: string;
    subHeading: string;
    type: audienceDemographicsTypes[];
  };
  growthAndInterest:{
    id : number;
    heading: string;
    subHeading: string;
    type: growthAndInterestTypes[];
  };
  audienceInterests:{
    id: number;
    types: barChartTypes[];
  };
  audienceLocation:{
    id: number;
    types: barChartTypes[];
  };
  audienceSentiment:{
    id: number;
    types: pieChartTypes[];
  };
  genderDistribution:{
    id: number;
    types: pieChartTypes[];
  }
};

export type pieChartTypes = {
  id?: number;
  heading: string;
  subHeading: string;
  value: pieChartTypesValue[];
};

export type pieChartTypesValue = {
  id?: number;
  type: string;
  value: number;
  fill: string;
};

export type barChartTypes = {
  id?: number;
  heading: string;
  subHeading: string;
  value: barChartTypesValue[];
};

export type barChartTypesValue = {
  id?: number;
  type: string;
  value: number;
};

export type growthAndInterestTypes = {
  id: number;
  heading: string;
  subHeading: string;
  value: growthAndInterestTypesValue[];
};

export type growthAndInterestTypesValue = {
  id?: number;
  type: string;
  value: number;
};

export type audienceDemographicsTypes = {
  id: number;
  type: string;
  value: audienceDemographicsTypesValue[];
};

export type audienceDemographicsTypesValue = {
  id?: number;
  type: string;
  value: number;
};

export type followersTypes = {
  id: number;
  type: string;
  value: number;
};

export type CommentAnalysis = {
  id: number;
  heading: string;
  subHeading: string;
  value: number;
};
export type Post = {
  id: number;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  time: string;
};
