import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Pressable, 
  FlatList, 
  Image, 
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Button } from '@rneui/themed';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { useAuth } from './../../components/AuthContext';

// Data imports
import { data as nationalData, notUsed as nationalNotUsed } from "@/data/national";
import { data as universityData, notUsed as universityNotUsed } from "@/data/university";
import { router } from 'expo-router';

// Constants
const DATA_TYPES = {
  NATIONAL: 'national',
  UNIVERSITY: 'university',
};

export default function TabTwoScreen() {
  const [todos, setTodos] = useState([...nationalData, ...universityData]);
  const [currentType, setCurrentType] = useState(DATA_TYPES.NATIONAL);
  const [scanPage, setScanPage] = useState(false);
    const {  userRole, selectType } = useAuth();

  // Load todos from storage
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("TodoApp2");
        if (storedTodos) {
          const ids = JSON.parse(storedTodos).map(({ id }: { id: any }) => id);
          const filtered = JSON.parse(storedTodos).filter(({ id }: { id: any }, index:number) => !ids.includes(id, index + 1));
          setTodos(filtered);
        }
      } catch (e) {
        console.error("Error fetching todos:", e);
      }
    };
    fetchTodos();
  }, []);

  // Save todos to storage
  useEffect(() => {
    const storeTodos = async () => {
      try {
        await AsyncStorage.setItem("TodoApp2", JSON.stringify(todos));
      } catch (e) {
        console.error("Error saving todos:", e);
      }
    };
    storeTodos();
  }, [todos]);

  // Add a new credential
  const addCredential = () => {
    if(userRole==='Issuer'){
        const newType = [DATA_TYPES.NATIONAL, DATA_TYPES.UNIVERSITY][Math.floor(Math.random() * 2)];
    setCurrentType(newType);
    setScanPage(true);
    }else{
        Alert.alert('Access Denied', 'Only Issuers can issue credentials.');
    }
  
  };

  const completeScan = () => {
    const newItem = currentType === DATA_TYPES.NATIONAL
      ? nationalNotUsed[Math.floor(Math.random() * nationalNotUsed.length)]
      : universityNotUsed[Math.floor(Math.random() * universityNotUsed.length)];
     
     
      newItem.id= Math.random().toString(36).substring(2, 15);
    
     
     const ids = [newItem, ...todos].map(({ id }: { id: any }) => id);
     const filtered = [newItem, ...todos].filter(({ id }: { id: any }, index:number) => !ids.includes(id, index + 1));
    setTodos(filtered);
    setScanPage(false);
  };

  const togglePresence = (id:string) => {
    if(userRole==='Verifier'){
        setTodos(todos.map(todo => todo.id === id ? { ...todo, present: !todo.present } : todo));
        const type:"national" | "university" = todos.filter(todo => todo.id === id)[0].type;
        selectType(type)
         router.replace('/scan');
    }else{
        Alert.alert('Access Denied', 'Only Verifiers can verify credentials.');
    }
  };

  const removeTodo = (id:string) => {
    console.log(userRole,"Issuer")
    if(userRole==='Issuer'){
      setTodos(todos.filter(todo => todo.id !== id));
    }else{
      Alert.alert('Access Denied', 'Only Issuers can issue credentials.');
    }
  };

  // Reusable Components
  const CredentialCard = ({ item }: { item: any }) => (
    <Card key={item.id} containerStyle={styles.card}>
      <View style={styles.cardHeader}>
        <Card.Title>{item.type === DATA_TYPES.NATIONAL ? "National ID" : "University Degree"}</Card.Title>
        <Pressable onPress={() => removeTodo(item.id)}>
          <MaterialCommunityIcons name="delete-circle" size={36} color="red" />
        </Pressable>
      </View>
      <Card.Divider />
      {item.type === DATA_TYPES.UNIVERSITY ? (
        <View>
          <Text>Issue Date: {item.issue_date}</Text>
          <Text>Degree: {item.subject}</Text>
          <Text>Awarded by: {item.issued_by}</Text>
        </View>
      ) : (
        <View>
          <Text>Name: {item.name}</Text>
          <Text>Date Of Issue: {item.date_of_issue}</Text>
          <Text>Date Of Birth: {item.date_of_birth}</Text>
          <Text>Issued At: {item.issued_at}</Text>
        </View>
      )}
      <Card.Divider />
      <Button
        title= "Present" 
        onPress={() => togglePresence(item.id)}
      />
    </Card>
  );

  const ScanPage = () => (
    <View style={styles.scanContainer}>
      <Card>
        <Card.Title>Scan Page</Card.Title>
        <Card.Divider />
        <Card.Image
          source={currentType === DATA_TYPES.NATIONAL
            ? require('./../../assets/images/Image1.jpg')
            : require('./../../assets/images/Image4.jpg')}
        />
        <Text style={styles.scanText}>Click DONE to Create New Credential.</Text>
        <Button title="DONE" onPress={completeScan} />
      </Card>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {!scanPage ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Credentials</Text>
            <Pressable style={styles.addButton} onPress={addCredential}>
              <View style={styles.addButtonContent}>
                <Text style={styles.addButtonText}>Add</Text>
                <MaterialIcons name="add-circle-outline" size={24} color="white" />
              </View>
            </Pressable>
          </View>
          <Animated.FlatList
            data={todos}
            renderItem={({ item }) => <CredentialCard item={item} />}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.list}
            itemLayoutAnimation={LinearTransition}
        
          />
        </View>
      ) : (
        <ScanPage />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
  },
  addButton: {
    backgroundColor: '#2089DC',
    padding: 10,
    borderRadius: 5,
  },
  addButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    marginRight: 5,
  },
  list: {
    flexGrow: 1,
    paddingBottom: 90
  },
  card: {
    marginTop: 15,
    borderRadius: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
