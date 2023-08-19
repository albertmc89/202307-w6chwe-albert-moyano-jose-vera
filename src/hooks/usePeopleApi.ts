import axios from "axios";
import { useCallback } from "react";
import { ApiUser, User } from "../types";

const usePeopleApi = () => {
  const apiUrl = import.meta.env.VITE_API_PEOPLE_URL;

  const getUser = useCallback(async (): Promise<User[]> => {
    const { data: apiUsers } = await axios.get<ApiUser[]>(`${apiUrl}users`);

    const users = apiUsers.map<User>(
      ({ id, name, age, sexo, image, location, isFriend }) => ({
        id,
        name,
        age,
        sexo,
        picture: image,
        location,
        isFriend,
      }),
    );
    return users;
  }, [apiUrl]);

  return getUser;
};
export default usePeopleApi;