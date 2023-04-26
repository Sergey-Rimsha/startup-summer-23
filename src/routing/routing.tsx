import { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../layout';
import { JobsSearch } from '../pages';

const Paths = {
  login: 'login',
  jobsSearch: 'jobsSearch',
};

export const Routing = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={Paths.jobsSearch} />} />
      <Route path={Paths.jobsSearch} element={<JobsSearch />} />
    </Route>
    <Route path={Paths.login} element={<div>login</div>} />
    <Route path="*" element={<div>not found</div>} />
  </Routes>
);
