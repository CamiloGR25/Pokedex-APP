import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Menu from './Menu';

export default function Buscador() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Buscar Pokémon:</Text>
            <TextInput
                placeholder='Nombre del Pokémon'
                placeholderTextColor={"blue"}
                style={styles.input}
            />
            <Image
                style={styles.img_pikachu}
                source={{ uri: "https://detectivepikachu.pokemon.com/_images/characters/pikachu-intro.png" }}
            />
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

    },
    texto: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        marginTop: 25,
        marginRight: "20%"
    },
    input: {
        borderWidth: 5,//tamaño del borde
        backgroundColor: "white", //color del fondo input
        borderColor: "black", //color de borde
        padding: 10, //margen dentro 
        paddingStart: 25,//margen para escribir
        marginTop: 10, //margen del input arriba
        width: "90%", //largo
        height: 50, //alto
        borderRadius: 30, //borde radio
    },
    img_pikachu: {
        width: "100%",
        height: "53%",
        marginTop: "10%",
        resizeMode: "contain",
    }
});