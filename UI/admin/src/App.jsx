import { Suspense, lazy, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import { useAuth } from './context/AuthContext';
import MainLayout from './layout/MainLayout';
import NEWS from './views/news/News';
import Tags from './views/tags/Tag';
const About = lazy(() => import('./views/about/About'));
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'));
// const Home = lazy(() => import('./views/home/Home'));
const Login = lazy(() => import('./views/login/Login'));
const Categories = lazy(() => import('./views/categories/Categories'));

function App() {
  return (
    <div className={style.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='categories' element={<Categories />} />
            <Route path='tags' element={<Tags />} />
            <Route path='news' element={<NEWS />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
