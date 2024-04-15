import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Buscador() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nombre del Pokemon'
                placeholderTextColor={"blue"}
                style={styles.input}
            />
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
    input: {
        borderWidth: 5,//tamaño del borde
        backgroundColor: "white", //color del fondo input
        borderColor: "black", //color de borde
        padding: 10, //margen dentro 
        paddingStart: 25,//margen para escribir
        marginTop: 60, //margen del input arriba
        width: "90%", //largo
        height: 50, //alto
        borderRadius: 30, //borde radio
    }
});