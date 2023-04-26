import React, { type ReactElement } from 'react';

import './App.scss';
import { Routing } from './routing';

export const App = (): ReactElement => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
};
