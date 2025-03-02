import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from "react-native";


// Imagenes PNG
const background = require('../assets/images/fondoPantalla.png');
const artist1 = require('../assets/images/artist1.png');
const artist2 = require('../assets/images/artist2.png');
const artist3 = require('../assets/images/artist3.png');


// Iconos SVG
import Search from "../components/Icons/Search";
import BackBotton from "../components/Icons/backBotton";



// Componente PlayList
export default function PlayList() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>


        <BackBotton style={{ marginLeft: 20, marginTop: 40 }}/>




        

        {/* Buscador */}
        <View style={styles.containerBuscador}>
        
          <TextInput
            style={styles.searchInput}
            placeholder="¿Que te gustaria escuchar?"
            placeholderTextColor="#888"
          />

          <Search style={{ marginLeft: 20, marginTop: 40 }}/>
          
          
        </View>

        <Text style={styles.TextSearch}>Recientes</Text>


        <View style={styles.Recientes}>
          <Image source={artist1} style={{ width: 100, height: 100 }} />
          <Image source={artist2} style={{ width: 100, height: 100 }} />
          <Image source={artist3} style={{ width: 100, height: 100 }} />
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


  // Estilos Texto Buscador
  TextSearch: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    transform: [{ translateX: 20 }],
  },





  // Estilos Recomendados
  Recientes: {
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    marginTop: -10,
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
