import { Navigate, Route, Routes } from "react-router-dom";
import NewUserPage from "../../pages/NewUserPage/NewUserPage";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import { useAppSelector } from "../../store";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import "./App.css";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

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
