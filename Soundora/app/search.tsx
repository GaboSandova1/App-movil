import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import DeezerPlayer from "../components/DeezerPlayer";

// Imagenes PNG
const background = require('../assets/images/fondo.png');

// Iconos SVG
import BackBotton from "../components/Icons/backBotton";

// Importación de la navegación
import { router } from "expo-router";

// Componente Buscador
export default function Buscar() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

      {/* Botón de retroceso */}
      <TouchableOpacity onPress={() => router.back()}>
        <BackBotton style={{ marginLeft: 20, marginTop: 50 }} />
      </TouchableOpacity>
        
          {/* Título */}
        <Text style={styles.tituloBuscar}>Buscar</Text>

        {/* Contenido del buscador */}
        <DeezerPlayer />        
          
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  tituloBuscar:{
    marginTop: 14,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },


});
