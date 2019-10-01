/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/pages/Main/index';
import App from './src/index';
import NewEntry from './src/pages/NewEntry';
import Reports from './src/pages/Reports';

import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
