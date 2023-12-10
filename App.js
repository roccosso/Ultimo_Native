
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DatosScreen from './src/screens/DatosScreen';
import ResultadoScreen from './src/screens/ResultadoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DatosScreen"
        screenOptions={{
          orientation: 'portrait',
          headerShown: false,
          animation: 'none', 
        }}> 
        <Stack.Screen name="DatosScreen" component={DatosScreen} />
        <Stack.Screen name="ResultadoScreen" component={ResultadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}