import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

interface FormData {
  name: string;
  checkIn: Date;
  checkOut: Date;
  roomType: string;
  guests: string;
  phoneNumber: string;
  agreeToTerms: boolean;
}

export default function BookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    checkIn: new Date(),
    checkOut: new Date(),
    roomType: '',
    guests: '',
    phoneNumber: '',
    agreeToTerms: false,
  });

  const [showCheckIn, setShowCheckIn] = useState<boolean>(false);
  const [showCheckOut, setShowCheckOut] = useState<boolean>(false);
  const [showRoomPicker, setShowRoomPicker] = useState<boolean>(false);
  const [showGuestsPicker, setShowGuestsPicker] = useState<boolean>(false);

  const roomTypes: string[] = ['Standard', 'Deluxe', 'Suite', 'Presidential Suite'];
  const guestNumbers: string[] = ['1', '2', '3', '4', '5', '6'];

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleDateChange = (
    event: Event,
    selectedDate: Date | undefined,
    type: 'checkIn' | 'checkOut'
  ) => {
    if (selectedDate) {
      setFormData((prevState) => ({
        ...prevState,
        [type]: selectedDate,
      }));
    }
    if (type === 'checkIn') {
      setShowCheckIn(false);
    } else {
      setShowCheckOut(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Form</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        </View>

        {/* Date Selection */}
        <View style={styles.dateContainer}>
          <View style={styles.dateGroup}>
            <Text style={styles.label}>Check-in</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowCheckIn(true)}
            >
              <Text style={styles.dateText}>
                {formatDate(formData.checkIn)}
              </Text>
              <Ionicons name="calendar-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.dateGroup}>
            <Text style={styles.label}>Check-out</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowCheckOut(true)}
            >
              <Text style={styles.dateText}>
                {formatDate(formData.checkOut)}
              </Text>
              <Ionicons name="calendar-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Room Type Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Room Type</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowRoomPicker(true)}
          >
            <Text style={formData.roomType ? styles.inputText : styles.placeholder}>
              {formData.roomType || 'Select room type'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Guests Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Guests</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowGuestsPicker(true)}
          >
            <Text style={formData.guests ? styles.inputText : styles.placeholder}>
              {formData.guests || 'Select number of guests'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Contact Information */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact</Text>
          <View style={styles.phoneInput}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>🇺🇸 +1</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </View>
            <TextInput
              style={styles.phoneNumber}
              placeholder="Phone number"
              keyboardType="phone-pad"
              value={formData.phoneNumber}
              onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
            />
          </View>
        </View>

        {/* Terms Agreement */}
        <TouchableOpacity
          style={styles.termsContainer}
          onPress={() => setFormData({ ...formData, agreeToTerms: !formData.agreeToTerms })}
        >
          <View style={styles.checkbox}>
            {formData.agreeToTerms && (
              <Ionicons name="checkmark" size={16} color="#4CAF50" />
            )}
          </View>
          <Text style={styles.termsText}>
            I accept the Hotel's Terms of Service, Community Guidelines, and Privacy Policy
          </Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          style={[styles.continueButton, !formData.agreeToTerms && styles.continueButtonDisabled]}
          disabled={!formData.agreeToTerms}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Date Pickers */}
      {(showCheckIn || showCheckOut) && (
        <DateTimePicker
          value={showCheckIn ? formData.checkIn : formData.checkOut}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            handleDateChange(event, selectedDate, showCheckIn ? 'checkIn' : 'checkOut');
          }}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    marginRight:115,
    fontSize: 18,
    fontWeight: '600',
  },
  form: {
    padding: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  inputText: {
    color: '#333',
    fontSize: 16,
  },
  placeholder: {
    color: '#999',
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateGroup: {
    flex: 1,
    marginRight: 8,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  dateText: {
    color: '#333',
    fontSize: 14,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  countryCodeText: {
    marginRight: 4,
    fontSize: 16,
  },
  phoneNumber: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 4,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
