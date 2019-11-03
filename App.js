import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import BoxScreen from './src/screens/BoxScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Box: BoxScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
      headerStyle: {
        backgroundColor: '#fff',
        
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default createAppContainer(navigator);
