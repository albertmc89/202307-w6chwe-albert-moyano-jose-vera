import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import usePeopleApi from "../../hooks/usePeopleApi";
import { useAppDispatch } from "../../store";
import { loadUsersActionCreator } from "../../store/Users/UsersSlice";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import NewUserForm from "../NewUserForm/NewUserForm";
import UsersList from "../UsersList/UsersList";
import "./App.css";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsers } = usePeopleApi();

  useEffect(() => {
    (async () => {
      const users = await getUsers();

      dispatch(loadUsersActionCreator(users));
    })();
  }, [getUsers, dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Counter />
        <NewUserForm />
        <Routes>
          <Route path="/home" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/newrelationshippage"
            element={<Navigate to="/newrelationshippage" />}
          />
        </Routes>
        <UsersList />
      </main>
    </div>
  );
};

export default App;
