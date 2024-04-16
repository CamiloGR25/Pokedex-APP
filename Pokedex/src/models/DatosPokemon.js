import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Menu from './Menu';

export default function DatosPokemon() {
    return (
        <View style={styles.container}>

            <View style={styles.nombre_container}>
                <Text style={styles.nombre_texto}>Nombre</Text>
            </View>

            <View style={styles.imagen_container}>
                <Image
                    style={styles.imagen_pokemon}
                    source={{ uri: "https://www.nintendo.com/eu/media/images/08_content_images/news_5/2016_1/august_10/CI7_PokemonFeatureNews_Charmander.jpg" }}
                    resizeMode="contain"//mantenga toda la imagen               
                />
            </View>

            <View style={styles.datos_container}>
                <Text style={styles.datos_texto}>Dato1</Text>
                <Text style={styles.datos_texto}>Dato2</Text>
                <Text style={styles.datos_texto}>Dato3</Text>
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
        //justifyContent: 'center'

    },
    nombre_container: {
        marginTop: "20%",
        width: "45%",
        height: "5%",
        backgroundColor: "white",
        marginRight: "35%"
    },
    nombre_texto: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        marginLeft: 5

    },
    imagen_container: {
        width: "80%",
        height: "40%",
        backgroundColor: "white"
    },
    imagen_pokemon: {
        flex: 1,
        resizeMode: "contain",
        width: "100%",
    },
    datos_container: {
        width: "80%",
        height: "20%",
        marginTop: "10%",
        backgroundColor: "black",
    },
    datos_texto: {
        fontSize: 20,
        color: "white",
        marginLeft: "5%",
        marginTop: "3%"
    },
});