import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/models/Inicio';
import Buscador from './src/models/Buscador';
import DatosPokemon from './src/models/DatosPokemon';
import Pokemon from './src/models/Pokemon';
import Favorito from './src/models/Favorito';


const Stack = createNativeStackNavigator();

function App() {
  return (
    //lista de pantallas: (con nombre y el componente designado de cada pantalla)
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
        <Stack.Screen name="Buscador" component={Buscador} />
        <Stack.Screen name="DatosPokemon" component={DatosPokemon} />
        <Stack.Screen name="Favorito" component={Favorito} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;