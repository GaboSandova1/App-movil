import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import Search from "./Icons/Search"; // Verifica la ruta

export default function DeezerPlayer() {
    const [query, setQuery] = useState("");
    const [tracks, setTracks] = useState([]);
    const [sound, setSound] = useState(null);
    const [recentTracks, setRecentTracks] = useState([]);

    const searchTracks = async () => {
        if (query.trim() === "") {
            // Mostrar recientes si está vacío
            setTracks([]);
            return;
        }

        try {
            const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
            const json = await response.json();
            setTracks(json.data);
        } catch (error) {
            console.error("Error al buscar canciones:", error);
        }
    };

    const addToRecent = (track) => {
        setRecentTracks((prev) => {
            const exists = prev.find((t) => t.id === track.id);
            const updated = exists ? prev.filter((t) => t.id !== track.id) : prev;
            const newList = [track, ...updated].slice(0, 4);
            return newList;
        });
    };

    const playPreview = async (previewUrl, track) => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: previewUrl },
            { shouldPlay: true }
        );
        setSound(newSound);
        addToRecent(track);
    };

    return (
        <View style={{ padding: 20, flex: 1 }}>
            {/* Input con icono de búsqueda */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <TextInput
                    placeholder="¿Que te gustaria escuchar?"
                    placeholderTextColor="#fff"
                    
                    value={query}
                    onChangeText={setQuery}
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        padding: 8,
                        borderRadius: 5,
                        borderColor: "#ccc",
                        color: "#fff",
                    }}
                />
                <TouchableOpacity onPress={searchTracks} style={{ marginLeft: 10 }}>
                    <Search width={24} height={24} translateX={10} />
                </TouchableOpacity>
            </View>

            {/* Recién reproducidas SOLO si el input está vacío y no hay búsqueda activa */}
            {query.trim() === "" && recentTracks.length > 0 && (
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10, marginTop: 10, color: "#fff" }}>
                        Recientes
                    </Text>
                    {recentTracks.map((track) => (
                        <View
                            key={track.id}
                            style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
                        >
                            <Image
                                source={{ uri: track.album.cover_small }}
                                style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }}
                            />
                            <View>
                                <Text style={{ color: "#fff" }}>{track.title}</Text>
                                <Text style={{ color: "gray" }}>{track.artist.name}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}

            {/* Resultados de búsqueda */}
            <FlatList
                data={tracks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => playPreview(item.preview, item)}
                        style={{
                            marginVertical: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={{ uri: item.album.cover_small }}
                            style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }}
                        />
                        <View>
                            <Text style={{ fontWeight: "bold", color: "#fff" }}>{item.title}</Text>
                            <Text style={{ color: "gray" }}>{item.artist.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
