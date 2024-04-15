import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Menu from './Menu';

export default function DatosPokemon() {
    return (
        <View style={styles.container}>
            <View style={styles.nombre}>

            </View>
            <View style={styles.imagen}>
                <Image
                    style={{ width: 300, height: 300 }}
                    source={{ uri: "https://www.nintendo.com/eu/media/images/08_content_images/news_5/2016_1/august_10/CI7_PokemonFeatureNews_Charmander.jpg" }}
                    resizeMode="contain"//mantenga toda la imagen               
                />
            </View>
            <View style={styles.datos}>
                <Text style={{ color: "white", fontSize: 20 }}>Indice</Text>
                <Text>Indice</Text>
                <Text>Indice</Text>
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
    texto: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        marginTop: 45,
        marginRight: 220
    },
    nombre: {
        marginTop: "20%",
        width: "45%",
        height: "5%",
        backgroundColor: "white",
        marginRight: "35%"
    },
    imagen: {
        width: "80%",
        height: "40%",
        backgroundColor: "white"
    },
    datos: {
        width: "80%",
        height: "20%",
        marginTop: "10%",
        backgroundColor: "black",
    }
});