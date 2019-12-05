import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Reports from './pages/Reports';
import Welcome from './pages/Welcome';
import Loading from './pages/Loading';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      Welcome,
      Main,
      NewEntry,
      Reports,
    },
    {
      initialRouteName: 'Loading',
      backBehavior: 'history',
    },
  ),
);

export default Routes;
