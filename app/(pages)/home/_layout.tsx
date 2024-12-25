import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="home"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="hotelDetails"
        options={{
          headerShown: false,
          presentation: 'modal'
        }}
      />
      <Stack.Screen 
        name="booking"
        options={{
          headerShown: false,
          presentation: 'modal'
        }}
      />

    </Stack>
  );
}