import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button} from "react-native-elements";
export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        {/*Used to name the card*/}
        <Card.Title>
          Adrian Holness
        </Card.Title>
        {/*Displays text underneath the card*/}
        <Text>
          Chicken
        </Text>
        {/*Divides both text in the browser*/}
        <Card.Divider/>
        <Text>
          Chinese food
        </Text>
        {/*Creates a button*/}
        <Button title = "Submit"/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
