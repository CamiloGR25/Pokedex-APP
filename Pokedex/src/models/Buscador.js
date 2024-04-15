import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Menu from './Menu';

export default function Buscador() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Buscar:</Text>
            <TextInput
                placeholder='Nombre del Pokemon'
                placeholderTextColor={"blue"}
                style={styles.input}
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
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        marginTop: 45,
        marginRight: 220
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
    }
});