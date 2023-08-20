import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../store/ui/uiSlice";
import { ApiUser, User } from "../types";

const usePeopleApi = () => {
  const apiUrl = import.meta.env.VITE_API_PEOPLE_URL;
  const dispatch = useDispatch();

  const getUsers = useCallback(async (): Promise<User[]> => {
    dispatch(startLoadingActionCreator());

    try {
      const { data: apiUsers } = await axios.get<ApiUser[]>(`${apiUrl}people`);

      const users = apiUsers.map<User>(
        ({ id, name, age, sex, image, location, isFriend }) => ({
          id,
          name,
          age,
          sex,
          picture: image,
          location,
          isFriend,
        }),
      );
      dispatch(stopLoadingActionCreator());

      return users;
    } catch (error) {
      dispatch(stopLoadingActionCreator());
      throw new Error("Can't get any user");
    }
  }, [apiUrl, dispatch]);

  return { getUsers };
};
export default usePeopleApi;
