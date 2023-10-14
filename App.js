import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenHome from "./screens/ScreenHome";
import ScreenColor from "./screens/ScreenColor";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScreenHome' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenColor" component={ScreenColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}