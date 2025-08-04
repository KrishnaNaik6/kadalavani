import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import HomePage from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={<RequireAuth>test</RequireAuth>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const LoginPage = () => {
  return <div>login</div>;
};
const RequireAuth = () => {
  return <div>RequireAuth</div>;
};
function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
