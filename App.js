import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Cart from './Cart';
import ProductDetailScreen from './ProductDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [cart, setCart] = React.useState([]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" options={{ title: 'Home' }}>
          {props => (
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" options={{ title: 'Home' }}>
                {props => <HomeScreen {...props} cart={cart} setCart={setCart} />}
              </Stack.Screen>
              <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Cart" options={{ title: 'Cart' }}>
          {props => <Cart {...props} cart={cart} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
