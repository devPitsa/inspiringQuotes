import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';
import List from './pages/List';
import CreateQuote from './pages/CreateQuote';
import DetailQuote from './pages/DetailQuote';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Signup,
        List,
        CreateQuote,
        DetailQuote,
    })
);

export default Routes;