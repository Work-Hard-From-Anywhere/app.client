import { Tabs } from 'expo-router';
import { MapPin, Newspaper, SearchIcon, User } from 'lucide-react-native';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366f1',
      }}>
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ color }) => <MapPin color={color} />,
        }}
      />
      <Tabs.Screen
        name="find"
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarIcon: ({ color }) => <Newspaper color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
