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
