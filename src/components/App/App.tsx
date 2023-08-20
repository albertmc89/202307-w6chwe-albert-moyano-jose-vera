import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import usePeopleApi from "../../hooks/usePeopleApi";
import NewUserPage from "../../pages/NewUserPage/NewUserPage";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadUsersActionCreator } from "../../store/Users/UsersSlice";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import "./App.css";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getUsers } = usePeopleApi();
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

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
        <Routes>
          <Route path="/home" element={<UsersListPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/newrelationshippage" element={<NewUserPage />} />
        </Routes>
      </main>
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
