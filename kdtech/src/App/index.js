import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingFull } from "./components/Loading";
import PrivateApp from "./routes/privateApp";
import ROUTERS from "./routes/routes";
import Redux from './redux/store';

const NoMarchScreen = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./modules/NoMatchLink")), 2000);
  });
});

const App = () => {
  return (
    <Suspense fallback={<LoadingFull/>}>
      <Provider store={Redux.store}>
        <PersistGate loading={null} persistor={Redux.persistor}>
          <BrowserRouter>
            <Switch>
              {ROUTERS.map(({ isPrivate, Component, ...route }, i) => {
                if (isPrivate) {
                  return (
                    <PrivateApp key={i} {...route}>
                      <Component />
                    </PrivateApp>
                  );
                }
                return (
                  <Route key={i} {...route}>
                    <Component />
                  </Route>
                );
              })}
              <Route path="*">
                <NoMarchScreen/>
              </Route>
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
