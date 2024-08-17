import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/home">
        <Home />
      </Route>
    </Routes>
  );
};

export default App;
