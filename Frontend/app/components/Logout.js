import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Logout = ({ navigation }) => {
  console.log(navigation);
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
