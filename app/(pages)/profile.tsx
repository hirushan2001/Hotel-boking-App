import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Ionicons name={icon as any} size={24} color="#16B364" style={styles.menuIcon} />
      <Text style={styles.menuText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
  </TouchableOpacity>
);

export default function ProfilePage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/images/h1.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.editIconContainer}>
            <Ionicons name="pencil" size={16} color="#FFF" />
          </View>
        </View>
        <Text style={styles.userName}>Wade Warren</Text>
        <Text style={styles.userEmail}>warren@gmail.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <MenuItem
          icon="person-outline"
          title="Profile Information"
          onPress={() => {}}
        />
        <MenuItem
          icon="notifications-outline"
          title="Notifications"
          onPress={() => {}}
        />
        <MenuItem
          icon="heart-outline"
          title="My favorites"
          onPress={() => {}}
        />
        <MenuItem
          icon="key-outline"
          title="Forgot Password"
          onPress={() => {}}
        />
        <MenuItem
          icon="card-outline"
          title="Payment Methods"
          onPress={() => {}}
        />
        <MenuItem
          icon="settings-outline"
          title="Settings"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    position: 'relative', // Ensures proper alignment
  },
  backButton: {
    position: 'absolute',
    left: 18, // Place back button on the left
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },

  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    padding:12,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#4CAF50',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#F0F0F0',
    // borderRadius: 8,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
    backgroundColor: '#eaf9ea', 
    padding:10,
    borderRadius:10
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});