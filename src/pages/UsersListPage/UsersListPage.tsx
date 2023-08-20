import { useEffect } from "react";
import UsersList from "../../components/UsersList/UsersList";
import usePeopleApi from "../../hooks/usePeopleApi";
import { useAppDispatch } from "../../store";
import { loadUsersActionCreator } from "../../store/Users/UsersSlice";

const UsersListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsers } = usePeopleApi();

  useEffect(() => {
    (async () => {
      const users = await getUsers();

      dispatch(loadUsersActionCreator(users));
    })();
  }, [getUsers, dispatch]);

  return (
    <>
      <UsersList />
    </>
  );
};

export default UsersListPage;
