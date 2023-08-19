import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import UsersList from "../UsersList/UsersList";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <UsersList />
      </main>
    </div>
  );
};

export default App;
