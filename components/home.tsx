import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./../assets/images/undraw_medical_care_movn.png')} style={{ width: 300, height: 300 }} />
      </View>
      <View>
        <Text style={styles.topHeading}>
          Your health caring partner
        </Text>
      </View>
      <View>
        <Text style={{ fontFamily: 'Poppins-light', textAlign: 'center', margin: '2em' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi sed temporibus quo? Animi assumenda praesentium et totam sed quis, tenetur rerum nulla necessitatibus architecto vitae voluptatem ut placeat sapiente.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.nextButton}>
          <AntDesign name="arrowright" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
      <View style={styles.authView}>
      <TouchableOpacity
          onPress={() => alert('Hello, You are logged in!')}
          style={styles.loginButton}>
            <Text style={{fontFamily: 'poppins-regular'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authView}>
      <TouchableOpacity
          onPress={() => alert('Hello, You are logged in!')}
          style={styles.signUpButton}>
            <Text style={{fontFamily: 'poppins-regular'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'poppins-regular'
  },

  topHeading: {
    fontFamily: 'Poppins-bold',
    fontSize: 20
  },

  nextButton: {
    backgroundColor: '#848AFA',
    borderRadius: 50,
    padding: 10,
  },
  buttonsView:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:10,

  },
  authView:{
   flex:1
  },
  loginButton:{
    backgroundColor: '#FFFFFF',
    color:'#000000',
    width:'100px',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#848AFA',
  },
  signUpButton:{
    backgroundColor: '#FD8CA0',
    color:'#fff',
    width:'100px',
    borderRadius: 5,
    padding: 10,
    // border: '1px solid gainsboro',
    marginLeft: '10px'
  }

});
