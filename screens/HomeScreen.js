import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignout =() => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message));
  }
  return (
    <View style = {styles.container}>
      <Text>Email:{auth.currentUser?.email} </Text>
        <TouchableOpacity 
          style = {styles.button}
          onPress={handleSignout}
        >
          <Text style = {styles.buttonText}>Sign out</Text> 
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#296E85',
    width: '30%',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
},

buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
});
