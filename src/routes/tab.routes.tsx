import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Recipe } from '../screens/recipe';
import { Inventory } from '../screens/inventory/Inventory';
import { Product } from '../screens/product';
import { Dashboard } from '../screens/dashboard/dashboard';

const { Screen, Navigator } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FF941A' },
        headerShown: false,
        tabBarStyle: {backgroundColor: '#f97316', borderTopEndRadius: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderTopWidth: 0, shadowOpacity: 1, height: 70, paddingBottom: 5 },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff'
      }}
    >
      <Screen component={Inventory} name="inventory" options={{ title: "Estoque", tabBarIcon: () => <Ionicons name={'cube'} size={32} color={'#fff'} /> }} />
      <Screen component={Recipe} name="recipe" options={{ title: "Receitas", tabBarIcon: () => <Ionicons name={'newspaper'} size={32} color={'#fff'} /> }} />
      <Screen component={Product} name="products" options={{ title: "Produtos", tabBarIcon: () => <Ionicons name={'shapes'} size={32} color={'#fff'} /> }} />
      <Screen component={Dashboard} name="dashboard" options={{ title: "Dashboard", tabBarIcon: () => <Ionicons name={'bar-chart'} size={32} color={'#fff'} /> }} />
    </Navigator>
  )
}

export { TabRoutes };