import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen: React.FC = () => {
  const hotels = [
    {
      id: "1",
      name: "The Dreamland by Young Villas",
      location: "Kuta, Bali",
      price: "$50/night",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Sunset Oasis Resort",
      location: "Santorini, Greece",
      price: "$72/night",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Image
            source={{ uri: "https://picsum.photos/id/1005/100/100" }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greeting}>Hi, Wade Warren 👋</Text>
            <Text style={styles.location}>Brooklyn, New York</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIconContainer}>
          <Ionicons
            name="notifications-outline"
            size={24}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} style={styles.searchIcon} />
        <TextInput placeholder="Search hotel..." style={styles.searchInput} />
      </View>

      {/* Promotional Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerTextContent}>
          <Text style={styles.bannerTitle}>Escape to Paradise</Text>
          <Text style={styles.bannerSubtitle}>20% off this Weekend!</Text>
          <Text style={styles.bannerDescription}>
            Book your dream stay at top hotels with exclusive weekend discounts.
            Limited time only!
          </Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with the correct image URL
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>

      {/* Explore Hotels */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore Hotels</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.hotelCard}>
            <Image source={{ uri: item.image }} style={styles.hotelImage} />
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.hotelDetails}>
              {item.location} • {item.price}
            </Text>
            <Text style={styles.hotelRating}>⭐ {item.rating}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  notificationIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationIcon: {
    color: "#000",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
  },

  searchIcon: {
    color: "#888",
    paddingHorizontal: 10,
  },

  banner: {
    backgroundColor: "#0d7747",
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    overflow: "hidden", 
  },
  bannerTextContent: {
    flex: 1,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  bannerSubtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 10,
    lineHeight: 20,
  },
  bannerDescription: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 15,
    lineHeight: 20,
  },
  bookNowButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  bookNowText: {
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 14,
  },
  bannerImage: {
    width: 120,
    height: 120,
    marginLeft: 10,
    borderRadius: 10, // Optional for rounded images
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#4CAF50",
  },
  hotelCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 200,
  },
  hotelImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  hotelName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  hotelDetails: {
    color: "#888",
    fontSize: 12,
    marginBottom: 5,
  },
  hotelRating: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4CAF50",
  },
});

export default HomeScreen;
