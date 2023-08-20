import { Navigate, Route, Routes } from "react-router-dom";
import NewUserPage from "../../pages/NewUserPage/NewUserPage";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
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
    </div>
  );
};

export default App;
