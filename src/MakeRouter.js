import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movie from "./routes/Movie";

function MakeRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default MakeRouter;
