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
};
export type Post = {
  id: number;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  time: string;
};
