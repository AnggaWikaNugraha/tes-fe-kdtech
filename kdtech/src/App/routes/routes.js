import React from 'react';
const AuthScreen = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../modules/login")), 2000);
  });
});
const HomeScreen = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../modules/dashboard")), 2000);
  });
});
const BarangScreen = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../modules/barang")), 2000);
  });
});

/**
 * @var ROUTERS adalah variable router aplikasi
 */
const ROUTERS = [
  {
    path: '/login',
    Component: AuthScreen,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/',
    Component: HomeScreen,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/barang',
    Component: BarangScreen,
    exact: true,
    isPrivate: true,
  },
];

export default ROUTERS;
