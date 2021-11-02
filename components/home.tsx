import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function Home() {
  return (
    <View style={styles.container}>
     {/* <Image source={require('./assets/icon.png')} /> */}
     <Image
        source={{ uri: `https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg` }}
      />
        <Text style={{ fontFamily: 'Poppins' }}> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed et optio dolor temporibus repellendus repellat, blanditiis modi officiis quidem, quae alias necessitatibus. Nesciunt quos qui aspernatur mollitia nam perspiciatis molestias?
        </Text>
            <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Poppins'
  },
  headerImg:{
    width:300,
  }
});
