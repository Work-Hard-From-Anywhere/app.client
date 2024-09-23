import { Tabs } from 'expo-router';
import { BookmarkIcon, MapPin, SearchIcon, User } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366f1',
        tabBarStyle: {
          height: 100,
          paddingBottom: 35,
          paddingTop: 15,
        },
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
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => <BookmarkIcon color={color} />,
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
