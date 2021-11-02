import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function Home() {
  return (
    <View style={styles.container}>
         <Image source={require('./../assets/images/undraw_medical_care_movn.png')} style={{width:300, height:300}}/>
         <Text style={{ fontFamily: 'Poppins-bold' }}> 
          Your health caring partner
         </Text>
         <Text style={{fontFamily:'Poppins-light', textAlign:'center', margin:'2em'}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi sed temporibus quo? Animi assumenda praesentium et totam sed quis, tenetur rerum nulla necessitatibus architecto vitae voluptatem ut placeat sapiente.
         </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'poppins-regular'
  },
  
});
