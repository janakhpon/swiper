import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';


export default class App extends Component {
  render() {
    return (
     <Swiper style={styles.wrapper} showsButtons={true}>
     <View style={styles.slide1}>
     <Text style={styles.text}> my princess, 👰 </Text>
     </View>
     <View style={styles.slide2}>
     <Text style={styles.text}> mayei </Text>
     </View>
     <View style={styles.slide3}>
     <Text style={styles.text}> is </Text>
     </View>
     <View style={styles.slide4}>
     <Text style={styles.text}>  the  </Text>
     </View>
     <View style={styles.slide5}>
     <Text style={styles.text}>  best 💓!  </Text>
     </View>
     </Swiper>
     );
   }
 }

 const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC407A',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c300',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A237E',
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c75a3',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

