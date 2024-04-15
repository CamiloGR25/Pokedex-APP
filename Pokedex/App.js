import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/models/Inicio';
import Buscador from './src/models/Buscador';
import DatosPokemon from './src/models/DatosPokemon';
import Menu from './src/models/Menu';
import Pokemon from './src/models/Pokemon';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
        <Stack.Screen name="Buscador" component={Buscador} />
        <Stack.Screen name="DatosPokemon" component={DatosPokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;