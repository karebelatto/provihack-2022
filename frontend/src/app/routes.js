import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useStores } from '../stores';

const Home = React.lazy(async () => import('../containers/Home').then((m) => ({ default: m.Home })));
const Login = React.lazy(async () => import('../containers/Login').then((m) => ({ default: m.Login })));
const Page404 = React.lazy(async () => import('../containers/Page404').then((m) => ({ default: m.Page404 })));
const CreateUser = React.lazy(async () => import('../containers/CreateUser').then((m) => ({ default: m.CreateUser })));

function ProtectedRoutes(props) {
  const { userStore: { token } } = useStores();
  const { children } = props;

  return (<Route render={() => (token ? children : <Navigate replace to="/login" />)} />);
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateUser />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
