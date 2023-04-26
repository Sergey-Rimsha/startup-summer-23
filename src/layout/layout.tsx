import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import { HeaderMegaMenu } from '../components/header';

export const Layout = (): ReactElement => (
  <div>
    <HeaderMegaMenu />
    <Outlet />
    <footer>footer</footer>
  </div>
);
