import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Menu from './Menu';

export default function Favorito() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>No tienes agregados Pokémon a favoritos</Text>
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
        justifyContent: 'center',
    },
    texto: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    }
});