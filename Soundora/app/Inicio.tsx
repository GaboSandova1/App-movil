import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useProfileImage } from "../context/ProfileImageContext";
import InicioScreen from "../components/InicioScreen";

// Imagen de fondo
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

          {/* Imagen del perfil de usuario */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={profileImage} style={{
              width: 40, 
              height: 40,
              borderRadius: 20,
              transform: [{ translateY: 38 }, { translateX: 10 }],
              }}
            />
          </TouchableOpacity>

            {/* Titulo */}
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
          
            {/* Contenido de la pantalla de inicio */}
            <InicioScreen />

          <StatusBar style="auto" />
        </ScrollView>
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


  // Scroll Bar Container
  scrollContainer: {
    marginTop: 10,
  },

});