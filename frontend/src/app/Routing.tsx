import { Routes, Route, Navigate } from 'react-router';

import Registration from '@pages/Registration';
import Login from '@pages/Login';
import Main from '@pages/Main';

import type { FC } from 'react';

const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Routing;
