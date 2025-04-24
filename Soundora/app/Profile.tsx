import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal, ImageBackground, TouchableOpacity, ScrollView, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useProfileImage } from "../context/ProfileImageContext"; // Asegúrate de que la ruta sea correcta

// Imagenes PNG
const background = require('../assets/images/fondo.png');

// Iconos SVG
import Option from "../components/Icons/Option";
import BackBotton from "../components/Icons/backBotton";


import { useState } from "react";

import { router } from "expo-router";

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para alternar entre login y perfil
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para mostrar/ocultar el modal
  const { profileImage, setProfileImage } = useProfileImage(); // Estado para la imagen de perfil
  // const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Verifica que ambos campos estén completos
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Simula el inicio de sesión
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Cierra sesión
    setIsModalVisible(false); // Cierra el modal
  };

  const handleEditProfile = async () => {
    // Solicita permisos para acceder a la galería
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Se requieren permisos para acceder a la galería.");
      return;
    }

    // Abre la galería para seleccionar una imagen
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Relación de aspecto 1:1 para imágenes cuadradas
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri }); // Actualiza la imagen de perfil
    }

    setIsModalVisible(false); // Cierra el modal
  };

  if (!isLoggedIn) {
    // Mostrar la pantalla de inicio de sesión
    return (
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Iniciar Sesion</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.input, styles.inputWithEffect]}
              placeholder="Usuario"
              placeholderTextColor="#fff"
              keyboardType="default"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.input, styles.inputWithEffect]}
              placeholder="Contraseña"
              placeholderTextColor="#fff"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.rememberForgot}>
            <TouchableOpacity>
              <Text style={styles.forgotText} onPress={() => alert("Pendejo")}>¿Olvidaste la contraseña?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.loginButton, styles.buttonWithEffect]} onPress={handleLogin}>
            <Text style={[styles.loginButtonText, styles.textWithEffect]}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <View style={styles.registerLink}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
              <TouchableOpacity>
                <Text style={styles.registerLinkText}>Registrarse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    );
  }




  // Muestra la pantalla de perfil
  return (

    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <BackBotton style={{ marginLeft: 20, marginTop: 50 }} />
      </TouchableOpacity>

      <TouchableOpacity
          onPress={() => setIsModalVisible(true)} // Abre el modal al tocar el ícono
          style={{
            marginLeft: 325,
            marginTop: -30,
            transform: [{ scale: 0.8 }],
          }}
        >
          <Option />
        </TouchableOpacity>

        <View style={{ alignItems: "center", justifyContent: "center", marginTop: -20, }}>
          <Image
            source={profileImage}
            style={{
              width: 108,
              height: 108,
              borderRadius: 54,
              transform: [{ translateY: 40 }],
            }}
          />

          {/* Mostrar el nombre de usuario introducido */}
          <Text style={styles.TextProfil}>{username}</Text>
          <Text style={{marginTop: 5, fontSize: 14, color: "#666"}}>Seguidores: 0    Seguidos: 0</Text>
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold", color: "#fff" }}>Actividad Reciente </Text>
        </View>

        {/* Modal para las opciones */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)} // Cierra el modal al presionar fuera
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleEditProfile} // Llama a la función para editar el perfil
              >
                <Text style={styles.modalButtonText}>Editar Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout} // Llama a la función para cerrar sesión
              >
                <Text style={styles.modalButtonText}>Cerrar Sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => setIsModalVisible(false)} // Cierra el modal
              >
                <Text style={styles.modalCancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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



  // Estilos Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#00FFDD",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#0f0a06",
    fontSize: 16,
    fontWeight: "bold",
  },modalCancelButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
  },
  modalCancelButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },




  // Estilos Texto Buscador
  TextProfil: {
    marginTop: 40,
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
  },


  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#0f0a06",
    padding: 20,
  },
  lightEffect: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: -1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textShadowColor: "#fff",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  inputBox: {
    width: "80%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#1a1a1a96",
    color: "#fff",
    fontSize: 16,
    
  },
  inputWithEffect: {
    textShadowColor: "#fff",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  rememberForgot: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  forgotText: {
    color: "#00FFDD",
    fontSize: 14,
    textShadowColor: "#00FFDD",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    fontWeight: "bold",
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#00FFDD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    
  },
  loginButtonText: {
    color: "#0f0a06",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: "#fff",
    fontSize: 14,
  },
  registerLinkText: {
    color: "#00FFDD",
    fontWeight: "bold",
    textShadowColor: "#00FFDD",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  textOn: {
    marginTop: 20,
    fontSize: 18,
    color: "#00FFDD",
    textShadowColor: "#00FFDD",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    fontWeight: "bold",
  },

  buttonWithEffect: {
    shadowColor: "#00FFDD",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  textWithEffect: {
    textShadowColor: "#00FFDD",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

});