import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from "react-native";

import Button from "../components/Button";

// Imagenes PNG
const background = require('../assets/images/fondoPantalla.png');

// Iconos SVG
import Search from "../components/Icons/Search";
import BackBotton from "../components/Icons/backBotton";
// import Play from "../components/Icons/Play";


// Componente PlayList
export default function PlayList() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

        <Button>

          <BackBotton style={{ marginLeft: 20, marginTop: 40 }}/>

        </Button>


        

        {/* Buscador */}
        <View style={styles.containerBuscador}>
        
          <TextInput
            style={styles.searchInput}
            placeholder="¿Que te gustaria escuchar?"
            placeholderTextColor="#888"
          />

          <Search style={{ marginLeft: 20, marginTop: 40 }}/>
          
        </View>
          
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}



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








  // Estilos Buscador
  containerBuscador: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    marginTop: -10,
  
  },
  searchInput: {
    height: 40,
    width: "87%",
    backgroundColor: "#333",
    borderRadius: 10,
    marginTop: 40,
    paddingLeft: 15,
  },
});
