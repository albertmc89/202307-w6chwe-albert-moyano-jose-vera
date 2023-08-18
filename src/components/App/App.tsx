import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <h1>Serial Friends</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
