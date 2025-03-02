import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const background = require('../assets/images/fondoPantalla.png');

export default function Album() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        
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
});
