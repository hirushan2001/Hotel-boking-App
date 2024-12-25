import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HotelDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Fallback data in case params are not provided
  const hotel = {
    name: params.name || 'Golden Sands Beachfront',
    location: params.location || 'Phuket, Thailand',
    price: params.price || '$100/night',
    rating: params.rating || 4.8,
    image: require('../../../assets/images/h1.jpg'),
    description: params.description || 'Nestled on the pristine shores of Phuket, Thailand. Golden Sands Beachfront offers a luxurious escape with breathtaking views of the sea.',
  };

  const amenities = [
    { icon: 'umbrella-outline', name: 'Beach' },
    { icon: 'snow-outline', name: 'AC' },
    { icon: 'barbell-outline', name: 'Gym' },
    { icon: 'water-outline', name: 'Pool' },
    { icon: 'wifi-outline', name: 'Wifi' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image source={hotel.image} style={styles.image} />
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Image Gallery Preview */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.galleryContainer}>
        {[...Array(4)].map((_, index) => (
          <Image 
            key={index}
            source={hotel.image} 
            style={styles.galleryImage} 
          />
        ))}
      </ScrollView>

      {/* Hotel Info */}
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#666" />
            <Text style={styles.location}>{hotel.location}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {hotel.rating}</Text>
            <Text style={styles.reviews}>(785 reviews)</Text>
          </View>
        </View>

        {/* Amenities */}
        <Text style={styles.sectionTitle}>Amenities</Text>
        <View style={styles.amenitiesContainer}>
          {amenities.map((amenity, index) => (
            <View key={index} style={styles.amenityItem}>
              <View style={styles.amenityIconContainer}>
                <Ionicons name={amenity.icon as any} size={24} color="#4CAF50" />
              </View>
              <Text style={styles.amenityName}>{amenity.name}</Text>
            </View>
          ))}
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{hotel.description}</Text>

        {/* Location Map Preview */}
        <Text style={styles.sectionTitle}>Location on Map</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Map Preview</Text>
        </View>

        {/* Booking Button */}
        <View style={styles.bookingContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.perNight}>Price</Text>
            <Text style={styles.price}>{hotel.price}</Text>
          </View>
          <TouchableOpacity style={styles.bookingButton} onPress={() => {router.push('/(pages)/home/booking');}}>
          <Text style={styles.bookingButtonText}>Booking Now</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 44,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryContainer: {
    paddingHorizontal: 16,
    marginTop: -40,
    marginBottom: 20,
  },
  galleryImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  headerContainer: {
    marginBottom: 24,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginRight: 8,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  amenityItem: {
    alignItems: 'center',
    marginRight: 24,
    marginBottom: 16,
  },
  amenityIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f9f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  amenityName: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  mapText: {
    color: '#666',
  },
  bookingContainer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  perNight: {
    fontSize: 14,
    color: 'black',
    opacity: 0.8,
  },
  bookingButton: {
    backgroundColor: '#4CAF50',
    borderRadius:8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  bookingButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});