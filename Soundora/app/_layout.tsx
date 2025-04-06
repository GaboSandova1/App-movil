import { Stack } from "expo-router";
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/components/Colors';
import { IconSymbol } from '@/components/IconSymbol.ios';
import TabBarBackground from '@/components/TabBarBackground.ios';
import { useColorScheme } from '@/components/useColorScheme';



import Search from "../components/Icons/Search";
import Profil from "../components/Icons/profil";
import PlayList from "../components/Icons/PlayList";
import HomeIcon from "../components/Icons/HomeIcon";
import Album from "../components/Icons/Album";



export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          // tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
        ios: {
          // Use a transparent background on iOS to show the blur effect
          position: 'absolute',
          backgroundColor: '#000000', 
          opacity: 1,
        },
        default: {
          backgroundColor: '#191919', 
          // opacity: 0.8,
        },
          }),
        }}>
        <Tabs.Screen
          name="Inicio"
          options={{
        title: 'Inicio',
        tabBarIcon: ({ color }) => <HomeIcon size={25} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="album"
          options={{
        title: 'Album',
        tabBarIcon: ({ color }) => <Album size={28} name="paperplane.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
        title: 'Buscar',
        tabBarIcon: ({ color }) => <Search size={28} name="magnifyingglass" color={color} />,
          }}
        />
        <Tabs.Screen
          name="playList"
          options={{
        title: 'Play List',
        tabBarIcon: ({ color }) => <PlayList size={28} name="music.note.list" color={color} />,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => <Profil size={28} name="magnifyingglass" color={color} />,
          }}
        />
      </Tabs>
    );;
}
