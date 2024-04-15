import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Buscador from './Buscador';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Image
                style={{ width: 235, height: 100, marginTop: 50 }}
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" }}
                resizeMode="contain"//mantenga toda la imagen
            />
            <Image
                style={{ width: 380, height: 240 }}
                source={{ uri: "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" }}
                resizeMode="contain"//mantenga toda la imagen

            />

            <Text style={styles.texto}>Selecciona tu opción preferida</Text>
            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Has presionado el botón de POKEMON");

                    }}>
                    <View style={styles.opciones}>
                        <Image
                            style={{ width: 80, height: 80, borderRadius: 30, }}
                            source={{ uri: "https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png" }}
                            resizeMethod='contain'
                        />
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>POKÉMON</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Buscador')
                    }}>
                    <View style={styles.opciones}>
                        <Image
                            style={{ width: 90, height: 90, borderRadius: 30, }}
                            source={{ uri: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e2/latest/20230122133405/Lupa_EP.png" }}
                            resizeMethod='contain'
                        />
                        <Text style={{ marginTop: 3, fontWeight: "bold" }}>BUSCAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Has presionado el botón Pokemon favoritos");
                }}>
                <View style={styles.opciones}>
                    <Image
                        style={{ width: 100, height: 90 }}
                        source={require("../img/Corazon.png")}
                        resizeMethod='contain'
                    />
                    <Text style={{ marginTop: 3, fontWeight: "bold" }}>FAVORITOS</Text>
                </View>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: 'center',
        //justifyContent: 'center',
    },
    /* titulo: {
         fontSize: 60,
         fontWeight: "bold",
         color: "white",
         borderWidth: 2,
         borderColor: "black",
     },*/
    texto: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },
    imagen: {
        width: 300,
        height: 150
    },
    opciones: {
        width: 130,
        height: 130,
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 30,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    }

});
