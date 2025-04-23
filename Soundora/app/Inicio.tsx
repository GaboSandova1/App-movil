import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { Box } from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useProfileImage } from "../context/ProfileImageContext";

import InicioScreen from "../components/InicioScreen";

// const user = require('../assets/images/user_icon.png');
const background = require('../assets/images/fondo.png');


import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Inicio: undefined;
  Profile: undefined;
  // Add other routes here if necessary
};


type InicioNavigationProp = StackNavigationProp<RootStackParamList, 'Inicio'>;


// Componente Inicio
export default function Inicio() {
  const { profileImage } = useProfileImage(); // Obtiene la imagen de perfil del contexto
  const navigation = useNavigation<InicioNavigationProp>();
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

        <View style={{ padding: 20,}}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={profileImage} style={{
            width: 40, 
            height: 40,
            borderRadius: 20,
            transform: [{ translateY: 38 }, { translateX: 10 }],
            }}
            />
          </TouchableOpacity>
            <Text style={{ 
              marginTop: -15, 
              fontSize: 21, 
              fontWeight: "bold",
              color: "#fff",
              transform: [{ translateX: 60 }, { translateY: 18 }],
              }}>Inicio
            </Text>

        </View>

        <ScrollView style={styles.container}>
          {/* Recomendados */}
          
            <InicioScreen />





          <StatusBar style="auto" />
        </ScrollView>
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


  // Scroll Bar Container
  scrollContainer: {
    marginTop: 10,
  },



  // // Apartado de Recomendados

  // // Recomendados Izquierda
  // ContainerRecomendados: {
  //   flexDirection: "column",
  //   alignItems: "flex-start",
  //   marginTop: 10,
  //   marginBottom: -190, 
  // },
  // ImageRecomendados: {
  //   width: 40,
  //   height: 40,
  // },
  // TextRecomendados: {
  //   marginTop: 10,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   transform: [{ translateX: 10 }],
  // },
  // BoxRecomendados: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   marginTop: 4,
  //   backgroundColor: "#333",
  //   padding: 11,
  //   paddingRight: 63,
  //   borderRadius: 10,
  //   position: "relative",
  //   transform: [{ translateX: 20 }],
  // },


  // // Recomendados Derecha
  // Box2Recomendados: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   marginTop: 4,
  //   backgroundColor: "#333",
  //   padding: 11,
  //   paddingRight: 63,
  //   borderRadius: 10,
  //   position: "relative",
  //   transform: [{ translateX: 185 }, { translateY: -200 }],
  // },


  // Text2Recomendados: {
  //   marginTop: 10,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   transform: [{ translateX: 10 }],
  // },













  // // Apartado de Conoce Artistas
  // recommendationsContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginTop: 10,
  //   marginStart: 20,
  // },
  // recommendationBox: {
  //   alignItems: "flex-start",
  //   width: 100,
  //   marginHorizontal: 6, 
  // },
  // recommendationImage: {
  //   width: 100,
  //   height: 100,
  // },
  // recommendationText: {
  //   marginTop: 5,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   transform: [{ translateX: 20 }],
  // },








  
  // // Apartado de Tendencia
  // TendenciaContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginTop: 10,
  //   marginStart: 10,
  // },

  // TendenciaImage: {
  //   width: 110,
  //   height: 110,
    
  // },

  // tendenciaBox: {
  //   alignItems: "flex-start",
  //   width: 100,
  //   marginHorizontal: 12, 
  // },

  // TendenciaText: {
  //   marginTop: 10,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   transform: [{ translateX: 23 }],
  // },








  // // Apartado de Sigue Escuchando
  // SigueContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginTop: 10,
  //   marginStart: 10,
  // },

  // SigueImage: {
  //   width: 110,
  //   height: 110,
  // },

  // sigueBox: {
  //   alignItems: "flex-start",
  //   width: 100,
  //   marginHorizontal: 12, 
  // },

  // SigueText: {
  //   marginTop: 10,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   transform: [{ translateX: 23 }],
  // },








  // // Apartado de Albumes y sencillos populares
  // AlbumesContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginTop: 10,
  //   marginStart: 10,
  // },

  // AlbumesImage: {
  //   width: 110,
  //   height: 110,
  // },

  // AlbumesBox: {
  //   alignItems: "flex-start",
  //   width: 100,
  //   marginHorizontal: 12, 
  // },

  // AlbumesText: {
  //   marginTop: 10,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   transform: [{ translateX: 23 }],
  // },









});
