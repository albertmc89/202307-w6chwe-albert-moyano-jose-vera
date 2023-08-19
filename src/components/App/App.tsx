import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import UsersList from "../UsersList/UsersList";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <UsersList />
      </main>
    </div>
  );
};

export default App;
