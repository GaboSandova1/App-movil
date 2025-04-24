import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import Search from "./Icons/Search";

export default function SongSearchScreen() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]); // historial
  const [sound, setSound] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  const searchTracks = async () => {
    if (!query.trim()) {
      setTracks([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.deezer.com/search?q=${encodeURIComponent(query)}`
      );
      const json = await res.json();
      setTracks(json.data);
      setCurrentTrackIndex(null);
    } catch (err) {
      console.error("Error al buscar canciones:", err);
    }
  };

  const playTrack = async (track, index, isFromRecent = false) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: track.preview },
        { shouldPlay: true }
      );
      setSound(newSound);
      setCurrentTrackIndex(index);
      setProgress(0);
      setIsPlaying(true);

      // Agrega a recientes solo si no es desde el historial
      if (!isFromRecent) {
        setRecentTracks((prev) => {
          const filtered = prev.filter((t) => t.id !== track.id); // evitar duplicados
          const updated = [track, ...filtered];
          return updated.slice(0, 4); // solo 4
        });
      }

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.positionMillis != null) {
          setProgress(status.positionMillis / 1000);
        }
      });
    } catch (error) {
      console.error("Error al reproducir pista:", error);
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

  const seekTo = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value * 1000);
      setProgress(value);
    }
  };

  const playNextTrack = () => {
    const list = query.trim() ? tracks : recentTracks;
    if (currentTrackIndex != null && currentTrackIndex < list.length - 1) {
      playTrack(list[currentTrackIndex + 1], currentTrackIndex + 1, !query.trim());
    }
  };

  const playPrevTrack = () => {
    const list = query.trim() ? tracks : recentTracks;
    if (currentTrackIndex != null && currentTrackIndex > 0) {
      playTrack(list[currentTrackIndex - 1], currentTrackIndex - 1, !query.trim());
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
          placeholder="¿Qué quieres escuchar?"
          placeholderTextColor="#888"
          style={styles.input}
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            if (text.trim() === "") {
              setTracks([]);
              setCurrentTrackIndex(null);
            }
          }}
          onSubmitEditing={searchTracks}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchTracks}>
          <Search width={24} height={24} translateX={10} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={query.trim() ? tracks : recentTracks}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          !query.trim() && recentTracks.length > 0 ? (
            <Text style={{ color: "#888", marginBottom: 10 }}>Últimas canciones:</Text>
          ) : null
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => playTrack(item, index, !query.trim())}
            style={styles.trackCard}
          >
            <Image source={{ uri: item.album.cover_medium }} style={styles.trackImage} />
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1} style={styles.trackTitle}>{item.title}</Text>
              <Text numberOfLines={1} style={styles.trackArtist}>{item.artist.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {currentTrackIndex !== null && (
        <View style={styles.playerBar}>
          <Text style={styles.trackText}>
            {(query.trim() ? tracks : recentTracks)[currentTrackIndex].title}
          </Text>
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
          <Text style={styles.trackTime}>{Math.floor(progress)} / 29 seg</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={playPrevTrack}>
              <Ionicons name="play-skip-back" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <Ionicons
                name={isPlaying ? "pause-circle" : "play-circle"}
                size={50}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={playNextTrack}>
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
  trackCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  trackImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  trackTitle: {
    color: "#fff",
    fontSize: 16,
  },
  trackArtist: {
    color: "#aaa",
    fontSize: 14,
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
