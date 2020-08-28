import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import rotas from './routes'
import { store, persistor } from "./redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Login from './pages/login'
function App() {
  return (
    <BrowserRouter  >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path='/' exact={true} name="Auth" component={Login} />
            {
              rotas.map((prop, key) => {
                return (
                  <Route path={prop.path} key={key} render={() => (
                    localStorage.getItem('User@testeferacode') === null ?
                      (
                        <Redirect to='/' />
                      ) : (
                        <prop.component />
                      )
                  )} />
                );
              })
            }
            <Route path='*' render={() => <Redirect to='/' />} />
          </Switch>
        </PersistGate>
      </Provider>
    </BrowserRouter >
  );
}

export default App;
