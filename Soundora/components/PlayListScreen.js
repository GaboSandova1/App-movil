import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet, ScrollView, Image, Alert, } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

export default function PlaylistScreen() {
  const [playlists, setPlaylists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sound, setSound] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const duration = 30;

  const searchSongs = async () => {
    if (!searchQuery.trim()) return;
    try {
      const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(searchQuery)}`);
      const json = await res.json();
      setSearchResults(json.data.slice(0, 10));
    } catch (err) {
      console.error("Error buscando canciones:", err);
    }
  };

  const addSongToPlaylist = (song) => {
    setPlaylists((prev) => {
      const updated = [...prev];
      updated[currentPlaylistIndex].songs.push(song);
      return updated;
    });
  };

  const playPlaylist = (index) => {
    if (playlists[index].songs.length === 0) return;
    setCurrentPlaylistIndex(index);
    setCurrentTrackIndex(0);
    playTrack(playlists[index].songs[0]);
  };

  const playTrack = async (track) => {
    try {
      if (sound) await sound.unloadAsync();
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: track.preview },
        { shouldPlay: true }
      );
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setProgress(status.positionMillis / 1000);
          if (status.didJustFinish) {
            playNextTrack();
          }
        }
      });
      setSound(newSound);
      setIsPlaying(true);
    } catch (err) {
      console.error("Error al reproducir canción:", err);
    }
  };

  const playNextTrack = () => {
    const playlist = playlists[currentPlaylistIndex];
    const nextIndex = currentTrackIndex + 1;
    if (playlist && nextIndex < playlist.songs.length) {
      setCurrentTrackIndex(nextIndex);
      playTrack(playlist.songs[nextIndex]);
    }
  };

  const playPrevTrack = () => {
    const playlist = playlists[currentPlaylistIndex];
    const prevIndex = currentTrackIndex - 1;
    if (playlist && prevIndex >= 0) {
      setCurrentTrackIndex(prevIndex);
      playTrack(playlist.songs[prevIndex]);
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

  const createNewPlaylist = () => {
    setPlaylists([...playlists, { name: `Playlist ${playlists.length + 1}`, songs: [] }]);
    setCurrentPlaylistIndex(playlists.length);
    setSearchResults([]);
    setSearchQuery("");
    setShowModal(true);
  };

  const deletePlaylist = (index) => {
    Alert.alert(
      "Eliminar Playlist",
      "¿Estás seguro de que deseas eliminar esta playlist?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            const updated = playlists.filter((_, i) => i !== index);
            setPlaylists(updated);
            if (index === currentPlaylistIndex) {
              setCurrentPlaylistIndex(null);
              if (sound) sound.unloadAsync();
            }
          },
        },
      ]
    );
  };

  const seekTo = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value * 1000);
      setProgress(value);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createButton} onPress={createNewPlaylist}>
        <Text style={styles.createButtonText}>Crear una nueva Playlist</Text>
      </TouchableOpacity>

      <ScrollView style={{ marginTop: 20 }}>
        {playlists.map((playlist, index) => (
          <View key={index} style={styles.playlistContainer}>
            <TouchableOpacity onPress={() => playPlaylist(index)} style={styles.playlistButton}>
              <Text style={styles.playlistText}>{playlist.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletePlaylist(index)}>
              <Ionicons name="trash" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {currentPlaylistIndex !== null && playlists[currentPlaylistIndex]?.songs.length > 0 && (
        <View style={styles.playerBar}>
          <Text style={styles.trackText}>
            {playlists[currentPlaylistIndex].songs[currentTrackIndex]?.title}
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
          <View style={styles.controls}>
            <TouchableOpacity onPress={playPrevTrack}>
              <Ionicons name="play-skip-back" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={playNextTrack}>
              <Ionicons name="play-skip-forward" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buscar canciones"
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={searchSongs}
          />
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.songItem} onPress={() => addSongToPlaylist(item)}>
                <Image source={{ uri: item.album.cover_small }} style={styles.songImage} />
                <Text style={styles.songTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.doneButton} onPress={() => setShowModal(false)}>
            <Text style={styles.doneButtonText}>Listo</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#121212",
  },
  createButton: {
    backgroundColor: "#00FFDD",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  createButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
  playlistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  playlistButton: {
    flex: 1,
  },
  playlistText: {
    color: "#fff",
    fontSize: 16,
  },
  playerBar: {
    backgroundColor: "#1f1f1f",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#333",
    position: "absolute",
    bottom: 0,
    width: "106%",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  trackText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  input: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songTitle: {
    color: "#fff",
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: "#00FFDD",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  doneButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
});
