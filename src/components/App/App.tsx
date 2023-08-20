import { Navigate, Route, Routes } from "react-router-dom";
import UsersListPage from "../../pages/UsersListPage/UsersListPage";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Counter />
        <Routes>
          <Route path="/home" element={<UsersListPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="newrelationshippage" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
