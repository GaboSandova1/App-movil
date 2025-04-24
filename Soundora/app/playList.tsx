import { StatusBar } from "react-native";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, } from "react-native";

import PlayListScreen from "../components/PlayListScreen";

// Imagen de fondo
const background = require("../assets/images/fondo.png");

// Icono SVG del botón atrás
import BackBotton from "../components/Icons/backBotton";

// Importación para navegación
import { router } from "expo-router";

// Componente PlayList
export default function PlayList() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

        {/* Botón de retroceso */}
        <TouchableOpacity onPress={() => router.back()}>
          <BackBotton style={{ marginLeft: 20, marginTop: 50 }} />
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.tituloPlaylist}>Play List</Text>

        {/* Contenido de la playlist */}
        <PlayListScreen />

        <StatusBar />
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
  tituloPlaylist: {
    marginTop: 14,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
