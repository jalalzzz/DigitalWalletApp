import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useAuth } from './../../components/AuthContext';
  interface Template {
    id: number;
    type: string;
  }
export default function IssueCredentialScreen() {
  const [currentTemplate, setCurrentTemplate] = useState<Template | null>(null);
  const [offerURL, setOfferURL] = useState('');
  const {  DIDType } = useAuth();
  const [refrash, setRefrash] = useState(0);


  const templates = [
    { id: 1, type: 'National ID' },
    { id: 2, type: 'University Degree' },
  ];

  const generateOfferURL = ():void => {
    const randomID = Math.random().toString(36).substring(2, 15);
    const url = `https://example.com/offer/${DIDType}/${randomID}`;
    setOfferURL(url);
    Alert.alert('Offer Created', `QR Code generated for ${DIDType}`);
  };
  useEffect(()=>{
    generateOfferURL();
  }, [refrash]);



  const handleNotification = (response: 'accept' | 'reject') => {
    if (response === 'reject') {
      Alert.alert('Offer Rejected', 'The Holder rejected the offer.');
    } else {
      Alert.alert('Offer Accepted', 'Credential issued successfully.');
      setRefrash(Math.floor(Math.random()*20));
      router.replace('/credentials');
     
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Issue a Credential</Text>
      
      {offerURL && (
        <View style={styles.qrContainer}>
          <Text>Scan this QR Code to proceed:</Text>
          <QRCode value={offerURL} size={200}  testID="QRCode"/>
          <View style={styles.actions}>
            <Button
              title="Simulate Accept"
              onPress={() => handleNotification('accept')}
              testID="acceptButton"
            />
            <Button
              title="Simulate Reject"
              color="red"
              onPress={() => handleNotification('reject')}
              testID="rejectButton"
            />
          </View>
        </View>
      )}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '80%',
  },
});