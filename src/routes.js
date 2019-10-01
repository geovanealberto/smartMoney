import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Reports from './pages/Reports';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Reports,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'order',
    },
  ),
);

export default Routes;
