import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Logout = ({ navigation }) => {
  const onLogoutPress = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogoutPress}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});
