import { Suspense, useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./pages/newsDetails/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="news/:id" element={<News />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

const MainLayout = () => {
  return (
    <div>
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

// const Home = () => <div>Home</div>;
// const News = () => <div>News</div>;
const Login = () => <div>Login</div>;
