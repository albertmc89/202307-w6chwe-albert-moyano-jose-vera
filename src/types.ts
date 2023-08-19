export interface ApiUser {
  id: number;
  name: string;
  age: number;
  sex: string;
  image: string;
  location: string;
  isFriend: boolean;
}

export interface User extends Omit<ApiUser, "image"> {
  picture: string;
}
