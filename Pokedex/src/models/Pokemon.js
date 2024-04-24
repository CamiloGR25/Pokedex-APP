import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Menu from './Menu';

export default function Pokemon() {

    const pokemon_arr = [];
    for (let i = 0; i <= 6; i++) {
        //agregar nuevo elemento al array
        pokemon_arr.push(
            //key: identificar cada elemento unico
            <View key={i}>
                <View style={styles.nombre_container}>
                    <Text style={styles.nombre_texto}>Nombre</Text>
                </View>

                <View style={styles.imagen_container}>
                    <Image
                        style={styles.imagen_pokemon}
                        source={{ uri: "https://www.nintendo.com/eu/media/images/08_content_images/news_5/2016_1/august_10/CI7_PokemonFeatureNews_Charmander.jpg" }}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View >
                {pokemon_arr}
            </View>

            <Menu />

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: 'center',
        //justifyContent: 'center',
    },
    nombre_container: {
        marginTop: "10%",
        width: "25%",
        height: "5%",
        backgroundColor: "white",
        marginRight: "50%"
    },
    nombre_texto: {
        fontSize: 10,
        color: "black",
        fontWeight: "bold",
        marginLeft: 5

    },
    imagen_container: {
        width: "40%",
        height: "20%",
        backgroundColor: "white",

    },
    imagen_pokemon: {
        flex: 1,
        resizeMode: "contain",
        width: "100%",
    },
});

