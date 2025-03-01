import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const icon = require('../assets/images/user_icon.png');
const background = require('../assets/images/fondoPantalla.png');

export default function Perfil() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <Image source={icon} style={{
          width: 108, 
          height: 108,
          transform: [{ translateY: 70 }],
          }}
        />
        <StatusBar style="auto" />
        <Text style={{ 
          marginTop: 70, 
          fontSize: 21, 
          fontWeight: "bold",
          color: "#fff"
          }}>Benito Camela
        </Text>
        <Text style={{ 
          marginTop: 5, 
          fontSize: 14, 
          color: "#666"
          }}>Seguidores: 0    Seguidos: 0
        </Text>
        <Text style={{ 
          marginTop: 10, 
          fontSize: 16, 
          fontWeight: "bold",
          color: "#fff"
          }}>Actividad Reciente
        </Text>
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
    alignItems: "center",
    // justifyContent: "center",
  },
});
