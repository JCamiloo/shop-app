import React from "react";
import { View, StyleSheet } from "react-native";

const Centered = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Centered;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
