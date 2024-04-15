import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", }}>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Has presionado el botón pokemon favoritos");
                    }}>
                    <View style={styles.opciones}>
                        <Image
                            style={styles.imagen}
                            source={require("../img/Corazon.png")}
                            resizeMethod='contain'
                        />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Has presionado el botón de POKEMON");

                    }}>
                    <View style={styles.opciones}>
                        <Image
                            style={{ flex: 1, resizeMode: "contain", width: "80%", borderRadius: 30 }}
                            source={{ uri: "https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png" }}
                            resizeMethod='contain'
                        />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Has presionado el botón buscar pokemon");
                    }}>
                    <View style={styles.opciones}>
                        <Image
                            style={styles.imagen}
                            source={{ uri: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e2/latest/20230122133405/Lupa_EP.png" }}
                            resizeMethod='contain'
                        />

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: 'center',
        width: "100%",
        height: "11%",//90,
        position: 'absolute', // Posicionamiento absoluto
        bottom: 0, // Alineación en la parte inferior
    },
    opciones: {
        width: 100,
        height: "95%",
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 30,
        marginRight: 20,
        marginLeft: 20,
        marginTop: "2%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    imagen: {
        flex: 1,
        resizeMode: "contain",
        width: "100%",
        borderRadius: 30
    }
});