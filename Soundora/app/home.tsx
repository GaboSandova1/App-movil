import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Box } from "react-native-feather";

const user = require('../assets/images/user_icon.png');
const background = require('../assets/images/fondoPantalla.png');
const artist1 = require('../assets/images/artist1.png');
const artist2 = require('../assets/images/artist2.png');
const artist3 = require('../assets/images/artist3.png');
const artist4 = require('../assets/images/artist4.png');
const artist5 = require('../assets/images/artist5.png');
const artist6 = require('../assets/images/artist6.png');

export default function Inicio() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <Image source={user} style={{
          width: 40, 
          height: 40,
          transform: [{ translateY: 40 }, { translateX: 20 }],
          }}
        />
        
        <Text style={{ 
          marginTop: 5, 
          fontSize: 21, 
          fontWeight: "bold",
          color: "#fff",
          transform: [{ translateX: 80 }],
          }}>Inicio
        </Text>


        {/* Recomendados */}
        <Text style={{ 
          marginTop: 40, 
          fontSize: 21, 
          fontWeight: "bold",
          color: "#fff",
          transform: [{ translateX: 20 }],
          }}>Recomendados
        </Text>
        <View style={styles.ContainerRecomendados}>
          <View style={styles.BoxRecomendados}>
            <Image source={artist2} style={styles.ImageRecomendados} />
            <Text style={styles.TextRecomendados}>Song 1</Text>
          </View>
          <View style={styles.BoxRecomendados}>
            <Image source={artist3} style={styles.ImageRecomendados} />
            <Text style={styles.TextRecomendados}>Song 2</Text>
          </View>
          <View style={styles.BoxRecomendados}>
            <Image source={artist1} style={styles.ImageRecomendados} />
            <Text style={styles.TextRecomendados}>Song 3</Text>
          </View>
          <View style={styles.Box2Recomendados}>
            <Image source={artist1} style={styles.ImageRecomendados} />
            <Text style={styles.Text2Recomendados}>Song 4</Text>
          </View>
          <View style={styles.Box2Recomendados}>
            <Image source={artist2} style={styles.ImageRecomendados} />
            <Text style={styles.Text2Recomendados}>Song 5</Text>
          </View>
          <View style={styles.Box2Recomendados}>
            <Image source={artist3} style={styles.ImageRecomendados} />
            <Text style={styles.Text2Recomendados}>Song 6</Text>
          </View>
        </View>



        {/* Conoce Artistas */}
        <Text style={{ 
          marginTop: 10, 
          fontSize: 21, 
          fontWeight: "bold",
          color: "#fff",
          transform: [{ translateX: 20 }],
          }}>Conoce Artistas
        </Text>

        <View style={styles.recommendationsContainer}>
          <View style={styles.recommendationBox}>
            <Image source={artist1} style={styles.recommendationImage} />
            <Text style={styles.recommendationText}>Artista 1</Text>
          </View>
          <View style={styles.recommendationBox}>
            <Image source={artist2} style={styles.recommendationImage} />
            <Text style={styles.recommendationText}>Artista 2</Text>
          </View>
          <View style={styles.recommendationBox}>
            <Image source={artist3} style={styles.recommendationImage} />
            <Text style={styles.recommendationText}>Artista 3</Text>
          </View>
        </View>




          
          {/* Tendencia */}
        <Text style={{ 
          marginTop: 10, 
          fontSize: 21, 
          fontWeight: "bold",
          color: "#fff",
          transform: [{ translateX: 20 }],
          }}>Tendencia
        </Text>


        <View style={styles.TendenciaContainer}>
          <View style={styles.recommendationBox}>
            <Image source={artist4} style={styles.TendenciaImage} />
            <Text style={styles.TendenciaText}>Cancion 1</Text>
          </View>
          <View style={styles.recommendationBox}>
            <Image source={artist5} style={styles.TendenciaImage} />
            <Text style={styles.TendenciaText}>Cancion 2</Text>
          </View>
          <View style={styles.recommendationBox}>
            <Image source={artist6} style={styles.TendenciaImage} />
            <Text style={styles.TendenciaText}>Cancion 3</Text>
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



  // Apartado de Recomendados

  // Recomendados Izquierda
  ContainerRecomendados: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: -190, 
  },
  ImageRecomendados: {
    width: 40,
    height: 40,
  },
  TextRecomendados: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 10 }],
  },
  BoxRecomendados: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 4,
    backgroundColor: "#333",
    padding: 11,
    paddingRight: 63,
    borderRadius: 10,
    position: "relative",
    transform: [{ translateX: 20 }],
  },


  // Recomendados Derecha
  Box2Recomendados: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 4,
    backgroundColor: "#333",
    padding: 11,
    paddingRight: 63,
    borderRadius: 10,
    position: "relative",
    transform: [{ translateX: 185 }, { translateY: -200 }],
  },


  Text2Recomendados: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 10 }],
  },













  // Apartado de Conoce Artistas
  recommendationsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginStart: 10,
  },
  recommendationBox: {
    alignItems: "flex-start",
    width: 100,
  },
  recommendationImage: {
    width: 100,
    height: 100,
  },
  recommendationText: {
    marginTop: 5,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 20 }],
  },





  // Apartado de Tendencia
  TendenciaContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginStart: 10,
  },
  TendenciaImage: {
    width: 110,
    height: 110,
    
  },
  TendenciaText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 30 }],
  },

});
