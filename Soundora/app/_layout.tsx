import { Stack } from "expo-router";
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/components/Colors';
import { IconSymbol } from '@/components/IconSymbol.ios';
import TabBarBackground from '@/components/TabBarBackground.ios';
import { useColorScheme } from '@/components/useColorScheme';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="inicio"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="album"
          options={{
            title: 'Album',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Buscar',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
          }}
        />
        <Tabs.Screen
          name="playList"
          options={{
            title: 'Play List',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="music.note.list" color={color} />,
          }}
        />

      </Tabs>
    );;
}
