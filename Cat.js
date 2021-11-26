import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const Cat = (props) => {
  return (
    <View>
      <Text>Name of cat: {props.name} says: Meow meow</Text>
    </View>
  );
};

export default Cat;
