import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Inventory } from '../screens/inventory/Inventory';
import { Recipe } from '../screens/recipe';

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{}}
    >
      <Screen name="screenA" component={Recipe} options={{ title: 'Screen A', headerTitleAlign: 'center', headerShown: false }} />
      <Screen name="screenB" component={Inventory} options={{ title: 'Screen B', headerTitleAlign: 'center' }} />
    </Navigator>
  );
};

export { StackRoutes };