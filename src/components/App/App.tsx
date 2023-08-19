import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
