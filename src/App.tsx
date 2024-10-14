import { RootLayout } from "./components";
import { Home } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/get-started"
          element={
            <RootLayout>
              <h1>Get Started</h1>
            </RootLayout>
          }
        />
        <Route
          path="/changelogs"
          element={
            <RootLayout>
              <h1>Changelogs</h1>
            </RootLayout>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
