import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { RootStackParamList } from "../types"; // Adjust the path to where your navigation types are defined

// Imagenes PNG
const icon = require('../assets/images/user_icon.png');
const background = require('../assets/images/fondo.png');

// Iconos SVG
import Option from "../components/Icons/Option";
import BackBotton from "../components/Icons/backBotton";
// import Perfil from "../components/Icons/profil";


import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Inicio: undefined;
  Profile: undefined;
  // Add other routes here if necessary
};


type PerfilNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;


export default function Profile() {
  const navigation = useNavigation<PerfilNavigationProp>();
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <BackBotton style={{ marginLeft: 20, marginTop: 60 }}/>
      </TouchableOpacity>

        <Option style={{ marginLeft: 325, marginTop: -30, transform: [{ scale: 0.8 }] }}/>

        <View style={{alignItems: "center", justifyContent: "center", marginTop: -20}}>

          <Image source={icon} style={{width: 108, height: 108, transform: [{ translateY: 40 }]}}/>

          <Text style={styles.TextProfil}>Benito Camela</Text>

          <Text style={{marginTop: 5, fontSize: 14, color: "#666"}}>Seguidores: 0    Seguidos: 0</Text>

          <Text style={{ 
        marginTop: 10, 
        fontSize: 16, 
        fontWeight: "bold",
        color: "#fff"
        }}>Actividad Reciente
          </Text>

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
  TextProfil: {
    marginTop: 40,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
  },

});
