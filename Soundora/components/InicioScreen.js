import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Audio } from "expo-av";

export default function InicioScreen() {
  const [songsSet1, setSongsSet1] = useState([]);
  const [songsSet2, setSongsSet2] = useState([]);
  const [artistsSet1, setArtistsSet1] = useState([]);
  const [artistsSet2, setArtistsSet2] = useState([]);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    fetchRandomContent();
  }, []);

  const fetchRandomContent = async () => {
    try {
      const songsRes = await fetch("https://api.deezer.com/search?q=top");
      const songsJson = await songsRes.json();
      const songs = songsJson.data.slice(0, 12); // Obtener 10 y dividir en 5 + 5
      setSongsSet1(songs.slice(0, 6));
      setSongsSet2(songs.slice(6, 12));

      const artistsRes = await fetch("https://api.deezer.com/chart/0/artists");
      const artistsJson = await artistsRes.json();
      const artists = artistsJson.data.slice(0, 12);
      setArtistsSet1(artists.slice(0, 6));
      setArtistsSet2(artists.slice(6, 12));
    } catch (err) {
      console.error("Error al obtener contenido aleatorio:", err);
    }
  };

  const playTrack = async (previewUrl) => {
    if (sound) await sound.unloadAsync();
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: previewUrl },
      { shouldPlay: true }
    );
    setSound(newSound);
  };

  const playRandomFromArtist = async (artistName) => {
    try {
      const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(artistName)}`);
      const json = await res.json();
      if (json.data.length > 0) {
        const randomTrack = json.data[Math.floor(Math.random() * json.data.length)];
        playTrack(randomTrack.preview);
      }
    } catch (error) {
      console.error("Error al reproducir canción del artista:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Recomendados</Text>
      <View style={styles.grid}>
        {songsSet1.map((song) => (
          <TouchableOpacity key={song.id} onPress={() => playTrack(song.preview)} style={styles.card}>
            <Image source={{ uri: song.album.cover_medium }} style={styles.songImage} />
            <Text numberOfLines={1} style={styles.songText}>{song.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Conoce Artistas</Text>
      <View style={styles.artistRow}>
        {artistsSet1.map((artist) => (
          <TouchableOpacity key={artist.id} onPress={() => playRandomFromArtist(artist.name)} style={styles.artistContainer}>
            <Image source={{ uri: artist.picture_medium }} style={styles.artistImage} />
            <Text numberOfLines={1} style={styles.artistName}>{artist.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Artistas Populares</Text>
      <View style={styles.artistRow}>
        {artistsSet2.map((artist) => (
          <TouchableOpacity key={artist.id} onPress={() => playRandomFromArtist(artist.name)} style={styles.artistContainer}>
            <Image source={{ uri: artist.picture_medium }} style={styles.artistImage} />
            <Text numberOfLines={1} style={styles.artistName}>{artist.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Tendencia</Text>
      <View style={styles.grid}>
        {songsSet2.map((song) => (
          <TouchableOpacity key={song.id} onPress={() => playTrack(song.preview)} style={styles.card}>
            <Image source={{ uri: song.album.cover_medium }} style={styles.songImage} />
            <Text numberOfLines={1} style={styles.songText}>{song.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: "#121212",
    flex: 1,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
    marginVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    height: 120,
    marginBottom: 15,
  },
  songImage: {
    width: "100%",
    height: 100,
    borderRadius: 5,
  },
  songText: {
    color: "#fff",
    marginTop: 5,
  },
  artistRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  artistContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: 100,
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  artistName: {
    color: "#fff",
    textAlign: "center",
  },
});
