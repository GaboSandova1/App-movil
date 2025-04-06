import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity } from "react-native";


// Imagenes PNG
const background = require('../assets/images/fondo.png');
const artist4 = require('../assets/images/artist4.png');
const artist5 = require('../assets/images/artist5.png');
const artist6 = require('../assets/images/artist6.png');
const artist1 = require('../assets/images/artist1.png');
const artist2 = require('../assets/images/artist2.png');
const artist3 = require('../assets/images/artist3.png');


// Iconos SVG
import Search from "../components/Icons/Search";
import BackBotton from "../components/Icons/backBotton";



import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
type RootStackParamList = {
  Inicio: undefined;
  PlayList: undefined;
  // Add other routes here if necessary
};


type AlbumNavigationProp = StackNavigationProp<RootStackParamList, 'PlayList'>;


// Componente PlayList
export default function PlayList() {
  const navigation = useNavigation<AlbumNavigationProp>();
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>


        

        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <BackBotton style={{ marginLeft: 20, marginTop: 40 }}/>
        </TouchableOpacity>


        <Text style={styles.tituloPlaylist}>Play List</Text>

        

        {/* Buscador */}
        <View style={styles.containerBuscador}>
        
          <TextInput
            style={[styles.searchInput, styles.boxShadow]}
            placeholder="Buscar"
            placeholderTextColor="#888"
          />

          <Search style={{ marginLeft: 20, marginTop: 40 }}/>

        </View>

        <ScrollView>
          <View style={styles.PlayList}>
            <View style={styles.BoxPlayList}>
              <Image source={artist4} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Play List 1</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist5} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Play List 2</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist6} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Play List 3</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist1} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Artista</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist2} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Artista</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist5} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Play List 4</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist3} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Artista</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist6} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Play List 5</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist2} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Artista</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist4} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Play List 6</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist1} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Artista</Text>
            </View>
            <View style={styles.BoxPlayList}>
              <Image source={artist3} style={styles.PlayListImage} />
              <Text style={styles.PlayListText}>Artista</Text>
            </View>

          </View>
        </ScrollView>






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



  // Estilos Titulo PlayList
  tituloPlaylist: {
    marginTop: 14,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },



  // Estilos Texto Buscador
  TextSearch: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
  },

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


  
  //Opciones de PlayList
  PlayList: {
    flexDirection: "column",
    margin: 20,
    marginTop: 15,
    justifyContent: "space-around"
  },


  PlayListImage:{
    width:70, 
    height:70,

  },


  BoxPlayList: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 7,
    paddingRight: 63,
    position: "relative",
  },


  PlayListText: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 10 }, { translateY: 10 }],
  },


});

