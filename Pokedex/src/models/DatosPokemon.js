import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Menu from './Menu';

export default function DatosPokemon() {
    return (
        <View style={styles.container}>
            <View style={styles.nombre}>

            </View>
            <View style={styles.imagen}>

            </View>
            <View style={styles.datos}>

            </View>
            <Menu />
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
        backgroundColor: "black"
    }
});