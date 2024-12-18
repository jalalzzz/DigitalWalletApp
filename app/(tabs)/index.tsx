import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import * as Crypto from 'expo-crypto'; // To generate SHA-256
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './../../components/AuthContext';

// Dummy User Data 
const dummyUser =[ {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePhoto: 'https://via.placeholder.com/150', // Replace with actual photo URL
  role: 'Issuer', // 'Issuer' or 'Verifier'
},
{
  name: 'John1 Doe1',
  email: 'john1.doe1@example.com',
  profilePhoto: 'https://via.placeholder.com/150', // Replace with actual photo URL
  role: 'Verifier', // 'Issuer' or 'Verifier'
}];

export default function UserProfile() {
  const [DID, setDID] = useState('');
  const [user, setUser] = useState(dummyUser);
  const [slectUser,setSelectUser]=useState(0);
  const { isLoggedIn, userRole, login, logout } = useAuth();

  // Generate DID based on email
  useEffect(() => {
    setSelectUser(Math.floor(Math.random()*2));
    const generateDID = async () => {
      const hash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        user[slectUser].email
      );
      setDID(hash);
    };
    generateDID();
    login(slectUser===0?"Issuer":"Verifier");
  }, [slectUser]);


  // Save user data and DID on login
  const handleFirstLogin = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ ...user, DID }));
      Alert.alert('Success', 'User data and DID saved!');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const handleIssueCredential = () => {
    if (user[slectUser].role === 'Issuer') {
      Alert.alert('Issue Credential', 'Credential issued successfully!');
    } else {
      Alert.alert('Access Denied', 'Only Issuers can issue credentials.');
    }
  };

  const handleVerifyCredential = () => {
    if (user[slectUser].role === 'Verifier') {
      Alert.alert('Verify Credential', 'Credential verified successfully!');
    } else {
      Alert.alert('Access Denied', 'Only Verifiers can verify credentials.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image source={{ uri: user[slectUser].profilePhoto }} style={styles.profilePhoto} />

      {/* User Info */}
      <Text style={styles.name}>{user[slectUser].name}</Text>
      <Text style={styles.email}>{user[slectUser].email}</Text>

      {/* DID */}
      <Text style={styles.didTitle}>Decentralized ID (DID):</Text>
      <Text style={styles.did}>{DID}</Text>

      {/* Role-Based Actions */}
      <View style={styles.actions}>
        {user[slectUser].role === 'Issuer' && (
          <Button title="Issue Credential" onPress={handleIssueCredential} />
        )}
        {user[slectUser].role === 'Verifier' && (
          <Button title="Verify Credential" onPress={handleVerifyCredential} />
        )}
      </View>

      {/* Simulate First Login */}
      <Button
        title="Save User & DID (First Login)"
        onPress={handleFirstLogin}
        color="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  didTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  did: {
    fontSize: 14,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});