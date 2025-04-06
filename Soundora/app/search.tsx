import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";


// Imagenes PNG
const background = require('../assets/images/fondo.png');
const artist4 = require('../assets/images/artist4.png');
const artist5 = require('../assets/images/artist5.png');
const artist6 = require('../assets/images/artist6.png');


// Iconos SVG
import Search from "../components/Icons/Search";
import BackBotton from "../components/Icons/backBotton";



import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
type RootStackParamList = {
  Inicio: undefined;
  Buscador: undefined;
  // Add other routes here if necessary
};


type AlbumNavigationProp = StackNavigationProp<RootStackParamList, 'Buscador'>;


// Componente Buscador
export default function Buscar() {
  const navigation = useNavigation<AlbumNavigationProp>();
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>


        

        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <BackBotton style={{ marginLeft: 20, marginTop: 40 }}/>
        </TouchableOpacity>




        <Text style={styles.tituloBuscar}>Buscar</Text>


        {/* Buscador */}
        <View style={styles.containerBuscador}>
        


          <TextInput
            style={[styles.searchInput, styles.boxShadow]}
            placeholder="¿Que te gustaria escuchar?"
            placeholderTextColor="#888"
          />

          <Search style={{ marginLeft: 20, marginTop: 40 }}/>
          
          
        </View>

        <Text style={styles.TextSearch}>Recientes</Text>


        <View style={styles.Recientes}>
          <View style={styles.BoxRecientes}>
            <Image source={artist4} style={styles.RecientesImage} />
            <Text style={styles.TextRecientes}>Cancion 1</Text>
          </View>
          <View style={styles.BoxRecientes}>
            <Image source={artist5} style={styles.RecientesImage} />
            <Text style={styles.TextRecientes}>Cancion 2</Text>
          </View>
          <View style={styles.BoxRecientes}>
            <Image source={artist6} style={styles.RecientesImage} />
            <Text style={styles.TextRecientes}>Cancion 3</Text>
          </View>
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


  // Estilos Titulo Buscador
  tituloBuscar:{
    marginTop: 14,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },


  // Estilos Texto Buscador
  containerBuscador: {
    flexDirection: "row",
    margin: 30,
    alignItems: "center",
    marginTop: -15,
  
  },
  searchInput: {
    height: 40,
    width: "87%",
    backgroundColor: "#333",
    borderRadius: 10,
    marginTop: 40,
    paddingLeft: 15,
    
  },

  boxShadow: {
    shadowColor: "white",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4,
    elevation: 16, 
  },





  // Estilos Recientes

  TextSearch: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    transform: [{ translateX: 20 }],
  },

  Recientes: {
    flexDirection: "column",
    margin: 20,
    marginTop: 15,
    justifyContent: "space-around"
  },


  RecientesImage:{
    width:50, 
    height:50,

  },


  BoxRecientes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 7,
    paddingRight: 63,
    position: "relative",
  },


  TextRecientes: {
    marginTop: 10,
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 10 }, { translateY: 0 }],
  },




});
