import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movie from "./routes/Movie";
import Details from "./routes/Details";

function MakeRouter() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Movie />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Details />}
        />
      </Routes>
    </Router>
  );
}

export default MakeRouter;
