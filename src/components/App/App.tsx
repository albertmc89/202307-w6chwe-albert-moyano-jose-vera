import { Navigate, Route, Routes } from "react-router-dom";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import NewUserForm from "../NewUserForm/NewUserForm";
import "./App.css";

const App = (): React.ReactElement => {
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
      </main>
    </div>
  );
};

export default App;
