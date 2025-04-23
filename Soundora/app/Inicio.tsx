import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { Box } from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useProfileImage } from "../context/ProfileImageContext";

const user = require('../assets/images/user_icon.png');
const background = require('../assets/images/fondo.png');
const artist1 = require('../assets/images/artist1.png');
const artist2 = require('../assets/images/artist2.png');
const artist3 = require('../assets/images/artist3.png');
const artist4 = require('../assets/images/artist4.png');
const artist5 = require('../assets/images/artist5.png');
const artist6 = require('../assets/images/artist6.png');

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
            transform: [{ translateY: 20 }, { translateX: 10 }],
            }}
            />
          </TouchableOpacity>
            <Text style={{ 
              marginTop: -15, 
              fontSize: 21, 
              fontWeight: "bold",
              color: "#fff",
              transform: [{ translateX: 70 }],
              }}>Inicio
            </Text>

        </View>

        <ScrollView style={styles.container}>
          {/* Recomendados */}
          <Text style={{ 
            marginTop: 10, 
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

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
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
              <View style={styles.recommendationBox}>
                <Image source={artist2} style={styles.recommendationImage} />
                <Text style={styles.recommendationText}>Artista 4</Text>
              </View>
              <View style={styles.recommendationBox}>
                <Image source={artist1} style={styles.recommendationImage} />
                <Text style={styles.recommendationText}>Artista 5</Text>
              </View>
              <View style={styles.recommendationBox}>
                <Image source={artist3} style={styles.recommendationImage} />
                <Text style={styles.recommendationText}>Artista 6</Text>
              </View>
            </View>
          </ScrollView>



            
            {/* Tendencia */}
          <Text style={{ 
            marginTop: 10, 
            fontSize: 21, 
            fontWeight: "bold",
            color: "#fff",
            transform: [{ translateX: 20 }],
            }}>Tendencia
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.TendenciaContainer}>
              <View style={styles.tendenciaBox}>
                <Image source={artist4} style={styles.TendenciaImage} />
                <Text style={styles.TendenciaText}>Cancion 1</Text>
              </View>
              <View style={styles.tendenciaBox}>
                <Image source={artist5} style={styles.TendenciaImage} />
                <Text style={styles.TendenciaText}>Cancion 2</Text>
              </View>
              <View style={styles.tendenciaBox}>
                <Image source={artist6} style={styles.TendenciaImage} />
                <Text style={styles.TendenciaText}>Cancion 3</Text>
              </View>
              <View style={styles.tendenciaBox}>
                <Image source={artist5} style={styles.TendenciaImage} />
                <Text style={styles.TendenciaText}>Cancion 4</Text>
              </View>
              <View style={styles.tendenciaBox}>
                <Image source={artist4} style={styles.TendenciaImage} />
                <Text style={styles.TendenciaText}>Cancion 5</Text>
              </View>
              <View style={styles.tendenciaBox}>
                <Image source={artist6} style={styles.TendenciaImage} />
                <Text style={styles.TendenciaText}>Cancion 6</Text>
              </View>
            </View>
          </ScrollView>



          {/* Sigue Escuchando */}
          <Text style={{ 
            marginTop: 10, 
            fontSize: 21, 
            fontWeight: "bold",
            color: "#fff",
            transform: [{ translateX: 20 }],
            }}>Sigue Escuchando
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.SigueContainer}>
              <View style={styles.sigueBox}>
                <Image source={artist6} style={styles.SigueImage} />
                <Text style={styles.SigueText}>Cancion 1</Text>
              </View>
              <View style={styles.sigueBox}>
                <Image source={artist5} style={styles.SigueImage} />
                <Text style={styles.SigueText}>Cancion 2</Text>
              </View>
              <View style={styles.sigueBox}>
                <Image source={artist4} style={styles.SigueImage} />
                <Text style={styles.SigueText}>Cancion 3</Text>
              </View>
              <View style={styles.sigueBox}>
                <Image source={artist6} style={styles.SigueImage} />
                <Text style={styles.SigueText}>Cancion 4</Text>
              </View>
              <View style={styles.sigueBox}>
                <Image source={artist5} style={styles.SigueImage} />
                <Text style={styles.SigueText}>Cancion 5</Text>
              </View>
              <View style={styles.sigueBox}>
                <Image source={artist4} style={styles.SigueImage} />
                <Text style={styles.SigueText}>Cancion 6</Text>
              </View>
            </View>
          </ScrollView>




            {/* Albumes y sencillos populares */}
          <Text style={{ 
            marginTop: 10, 
            fontSize: 21, 
            fontWeight: "bold",
            color: "#fff",
            transform: [{ translateX: 20 }],
            }}>Albumes y sencillos populares
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.AlbumesContainer}>
              <View style={styles.AlbumesBox}>
                <Image source={artist5} style={styles.AlbumesImage} />
                <Text style={styles.AlbumesText}>Cancion 1</Text>
              </View>
              <View style={styles.AlbumesBox}>
                <Image source={artist6} style={styles.AlbumesImage} />
                <Text style={styles.AlbumesText}>Cancion 2</Text>
              </View>
              <View style={styles.AlbumesBox}>
                <Image source={artist4} style={styles.AlbumesImage} />
                <Text style={styles.AlbumesText}>Cancion 3</Text>
              </View>
              <View style={styles.AlbumesBox}>
                <Image source={artist6} style={styles.AlbumesImage} />
                <Text style={styles.AlbumesText}>Cancion 4</Text>
              </View>
              <View style={styles.AlbumesBox}>
                <Image source={artist4} style={styles.AlbumesImage} />
                <Text style={styles.AlbumesText}>Cancion 5</Text>
              </View>
              <View style={styles.AlbumesBox}>
                <Image source={artist5} style={styles.AlbumesImage} />
                <Text style={styles.AlbumesText}>Cancion 6</Text>
              </View>
            </View>
          </ScrollView>





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
    marginStart: 20,
  },
  recommendationBox: {
    alignItems: "flex-start",
    width: 100,
    marginHorizontal: 6, 
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

  tendenciaBox: {
    alignItems: "flex-start",
    width: 100,
    marginHorizontal: 12, 
  },

  TendenciaText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 23 }],
  },








  // Apartado de Sigue Escuchando
  SigueContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginStart: 10,
  },

  SigueImage: {
    width: 110,
    height: 110,
  },

  sigueBox: {
    alignItems: "flex-start",
    width: 100,
    marginHorizontal: 12, 
  },

  SigueText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 23 }],
  },








  // Apartado de Albumes y sencillos populares
  AlbumesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginStart: 10,
  },

  AlbumesImage: {
    width: 110,
    height: 110,
  },

  AlbumesBox: {
    alignItems: "flex-start",
    width: 100,
    marginHorizontal: 12, 
  },

  AlbumesText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    transform: [{ translateX: 23 }],
  },






  //Algun otro Apartado


});
