import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movie from "./routes/Movie";
import Details from "./routes/Details";

function MakeRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route
          path="/movie/:id"
          //url check
          element={<Details />}
        />
      </Routes>
    </Router>
  );
}

export default MakeRouter;
