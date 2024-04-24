import React, { useEffect, useState } from 'react'; //libreria de obtencion de datos en componentes
import { View, Text, FlatList } from 'react-native';
import { getPokemonLista } from '../services/PokeService'; //importa el servicio de obtencion de datos 

const PokemonLista = () => {
    const [pokemonLista, setPokemonLista] = useState([]); //crear una lista que se actualiza

    //efecto secundario despues de que el componente se haya renderizado
    useEffect(() => {
        const fetchPokemonLista = async () => {
            const list = await getPokemonLista(); //llama el metodo importado para el HTTP get
            setPokemonLista(list.results);//actualiza la lista de pokemon
        };

        fetchPokemonLista(); //se llama la funcion
    }, []);

    return (
        <View>
            <FlatList //mostrar listas de datos en un formato desplazable
                data={pokemonLista} //array de los datos 
                keyExtractor={(item) => item.name} //identificador de cada item de la data (clave unica)

                //toma un item y lo devuelve como un componente:
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    );
};

export default PokemonLista; //exporta el componente