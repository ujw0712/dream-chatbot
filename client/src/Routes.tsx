import { FC } from 'react';
import { Switch, Route } from '~/core/Router';

import MainPage from '~/pages/Main';
import Main2Page from '~/pages/Main2';

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/main2">
        <Main2Page />
      </Route>
    </Switch>
  );
};

export default Routes;
