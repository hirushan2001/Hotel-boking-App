import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const hotels = [
    {
      id: "1",
      name: "Mountain View Lodge",
      location: "Aspen, Colorado",
      price: "$160/night",
      image: require("../../../assets/images/h1.jpg"),
      rating: 4.7,
    },
    {
      id: "2",
      name: "Palm Grove Hideaway",
      location: "Bora Bora, French Polynesia",
      price: "$395/night",
      image: require("../../../assets/images/h1.jpg"),
      rating: 4.9,
    },  
    {
      id: "3",
      name: "Hotel Found",
      location: "24",
      price: "$112/night",
      image: require("../../../assets/images/h1.jpg"),
      rating: 4.7,
    },
  ];

  const renderHeader = () => (
    <>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Image
            source={require("../../../assets/images/h1.jpg")}  
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
          source={require("../../../assets/images/h1.jpg")}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>

      {/* Explore Hotels Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore Hotels</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Hotel List */}
      <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `explore-${item.id}`}   
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.hotelCard} onPress ={() => router.push({
            pathname: '/(pages)/home/hotelDetails',
            params: {
              name: item.name,
              location: item.location,
              price: item.price,  
              rating: item.rating,
              description: 'Experience luxury and tranquility at Seaside Resort in the Maldives.',
            },
          })
          }>
            <Image source={item.image} style={styles.hotelImage} />
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.hotelDetails}>
              {item.location} • {item.price}
            </Text>
            <Text style={styles.hotelRating}>⭐ {item.rating}</Text>
          </TouchableOpacity>
        )}
        style={styles.horizontalList}
      />

      {/* Top Rated Hotels Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Rated Hotels</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <FlatList
      data={hotels}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => `top-rated-${item.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.topRatedContainer}>
          <Image source={item.image} style={styles.topRatedImage} />
          <View style={styles.topRatedTextContainer}>
            <Text style={styles.topRatedName}>{item.name}</Text>
            <Text style={styles.topRatedDetails}>{item.location}</Text>
            <Text style={styles.topRatedPrice}>{item.price}</Text>
          </View>
          <Text style={styles.topRatedRating}>⭐ {item.rating}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
  },
  horizontalList: {
    marginBottom: 20,
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
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
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
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
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
  topRatedContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  topRatedImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  topRatedTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  topRatedName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  topRatedDetails: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  topRatedPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  topRatedRating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFD700",
  },
});

export default HomeScreen;