import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Animated, } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import Search from "./Icons/Search";

export default function AlbumSearchScreen() {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [sound, setSound] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [albumTracks, setAlbumTracks] = useState([]);
  const [duration, setDuration] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const searchAlbums = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(
        `https://api.deezer.com/search/album?q=${encodeURIComponent(query)}`
      );
      const json = await res.json();
      setAlbums(json.data);
    } catch (err) {
      console.error("Error al buscar álbumes:", err);
    }
  };

  const animatePress = (anim) => {
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(anim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const playTrack = async (track) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound, status } = await Audio.Sound.createAsync(
        { uri: track.preview },
        { shouldPlay: true }
      );
      setSound(newSound);
      setCurrentTrack(track);
      setIsPlaying(true);
      setDuration(30);
      setProgress(0);

        newSound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.positionMillis != null) {
                setProgress(status.positionMillis / 1000);
            }
        });

    } catch (error) {
      console.error("Error al reproducir pista:", error);
    }
  };

  const playRandomTrackFromAlbum = async (albumId) => {
    try {
      const res = await fetch(`https://api.deezer.com/album/${albumId}`);
      const json = await res.json();
      const tracks = json.tracks.data;
      setAlbumTracks(tracks);
      if (tracks.length > 0) {
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        await playTrack(randomTrack);
      }
    } catch (err) {
      console.error("Error al reproducir canción del álbum:", err);
    }
  };

  const togglePlayPause = async () => {
    if (!sound) return;
    const status = await sound.getStatusAsync();
    if (status.isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const skipTrack = async () => {
    if (!albumTracks.length) return;
    const randomTrack = albumTracks[Math.floor(Math.random() * albumTracks.length)];
    await playTrack(randomTrack);
  };

  const seekTo = async (value) => {
    if (sound) {
        await sound.setPositionAsync(value * 1000);
        setProgress(value); // actualiza el valor en la interfaz
        
    }
  };

  useEffect(() => {
    return () => {
      if (sound) sound.unloadAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <TextInput
          placeholder="Busca un álbum o artista"
          placeholderTextColor="#888"
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={searchAlbums}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchAlbums}>
          <Search width={24} height={24} translateX={10} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.albumRow}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => playRandomTrackFromAlbum(item.id)} style={styles.albumCard}>
            <Image source={{ uri: item.cover_medium }} style={styles.albumImage} />
            <Text numberOfLines={1} style={styles.albumTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {currentTrack && (
        <View style={styles.playerBar}>
          <Text style={styles.trackText}>{currentTrack.title}</Text>
          <Slider
            style={{ width: "100%", height: 25 }}
            minimumValue={0}
            maximumValue={duration}
            value={progress}
            minimumTrackTintColor="#00FFDD"
            maximumTrackTintColor="#444"
            thumbTintColor="#00FFDD"
            onSlidingComplete={seekTo}
          />
          <Text style={styles.trackTime}>
            {Math.floor(progress)} / 29 seg
          </Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={skipTrack}>
              <Ionicons name="play-skip-back" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <Ionicons
                name={isPlaying ? "pause-circle" : "play-circle"}
                size={50}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipTrack}>
              <Ionicons name="play-skip-forward" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    marginLeft: 10,
  },
  searchButton: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 5,
  },
  albumRow: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  albumCard: {
    width: 160,
    alignItems: "center",
    marginBottom: 20,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  albumTitle: {
    color: "#fff",
    textAlign: "center",
  },
  playerBar: {
    backgroundColor: "#1f1f1f",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  trackText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  trackTime: {
    color: "#fff",
    marginTop: 5,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
});
