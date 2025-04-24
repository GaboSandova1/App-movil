import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,} from "react-native";
import AlbumScreen from "../components/AlbumScreen";

// Imagen de fondo
const background = require("../assets/images/fondo.png");

// Icono SVG
import BackBotton from "../components/Icons/backBotton";

// Navegación con Expo Router
import { router } from "expo-router"; 

// Componente Album
export default function Album() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        {/* Botón de retroceso */}
        <TouchableOpacity onPress={() => router.back()}>
          <BackBotton style={{ marginLeft: 20, marginTop: 50 }} />
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.tituloAlbum}>Álbum</Text>

        {/* Contenido del álbum */}
        <AlbumScreen />

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  tituloAlbum: {
    marginTop: 14,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
