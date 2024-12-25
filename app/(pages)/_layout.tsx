import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PagesLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'favorite':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'booking':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        }
      })}
    >
      <Tabs.Screen 
        name="home"
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen 
        name="favorite"
        options={{
          title: 'Favorite'
        }}
      />
      <Tabs.Screen 
        name="booking"
        options={{
          title: 'Booking'
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile'
        }}
      />
    </Tabs>
  );
}