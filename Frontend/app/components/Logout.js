import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Logout = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
);

export default Logout;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  
});
