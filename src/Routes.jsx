import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layout';
import NoMatch from './component/NoMatch';

import About from './About';
import Home from './Home';
import Dynamic from './Dynamic';

// react-router-dom v6 与 v5 差异 https://reactrouter.com/docs/en/v6/upgrading/v5
export default () => useRoutes([{
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />
    }, {
      path: 'about',
      element: <About />
    }, {
      path: 'dynamic',
      children: [{
        path: ':id',
        element: <Dynamic />
      }]
    }]
  }, {
    path: '*',
    element: <NoMatch />
  } 
]);