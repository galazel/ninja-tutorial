import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import Logo from '../assets/adaptive-icon.png';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.img} />
        <View style={styles.box}>
          <Text style={styles.text}>Glyzel Galagar</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Haruto Kurosaki</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // light gray background
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    paddingVertical: 15,
    marginBottom: 15,
    backgroundColor: '#4CAF50', // nicer green
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Android shadow
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50, // makes it circular
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
