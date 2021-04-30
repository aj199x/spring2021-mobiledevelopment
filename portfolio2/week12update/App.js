import React, {useState} from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-elements'; 

export default function App() {
 {/*Array used for car variable. Also calls on useState function */}
  const [car, setCar] = useState();
 {/*Array used for votes variable. Also calls on useState function and defaults it to false.*/}
  const [votes, setVotes] = useState(false);
{/*Function for Supra votes. Changes useState to true.*/}
  function increaseSupraVote(value){
    setCar('Supra');
    setVotes(true);
  }
{/*Function for GT-R votes. Changes useState to true.*/}
  function increaseGTRVote(value){
    setCar('GT-R');
    setVotes(true);
  }
{/*Function for Demon votes. Changes useState to true.*/}
  function increaseDemonVote(value){
    setCar('Demon');
    setVotes(true);
  }
{/*Function for Corvette votes. Changes useState to true.*/}
function increaseCorvetteVote(value){
  setCar('Corvette');
  setVotes(true);
}  
{/*Function for Mustang votes. Changes useState to true.*/}
function increaseMustangVote(value){
  setCar('Mustang');
  setVotes(true);
}  
{/*Function for Z4 votes. Changes useState to true.*/}
function increaseZ4Vote(value){
  setCar('Z4');
  setVotes(true);
}  
  return (
    
      <View style={styles.container}>
        {/*Displays when user makes a choice*/}
      { votes ? (
        <View style={styles.container}>
          <Text>
            {/*Uses car variable to tell user they voted for whichever car they chose*/}
            You voted for {car}!
          </Text>
        </View>
      ) : (
        /*Displays voting options*/
        <View>
        <Text style={styles.headerText}>
          Vote for your favorite car!
        </Text>
      <Card>
        <Button title="Toyota Supra" onPress={(value) => (increaseSupraVote('Supra'))} />
      </Card>
      {/*Divides content*/}
      <Card.Divider/>
      <Card>
        <Button title="Nissan GT-R" onPress={(value) => (increaseGTRVote('GT-R'))} />
      </Card>
      <Card.Divider/>
      <Card>
        <Button title="Dodge Demon" onPress={(value) => (increaseDemonVote('Demon'))} />
      </Card>
      <Card.Divider/>
      <Card>
        <Button title="Chevrolet Corvette" onPress={(value) => (increaseCorvetteVote('Corvette'))} />
      </Card>
      <Card.Divider/>
      <Card>
        <Button title="Ford Mustang" onPress={(value) => (increaseMustangVote('Mustang'))} />
      </Card>
      <Card.Divider/>
      <Card>
        <Button title="BMW Z4" onPress={(value) => (increaseZ4Vote('Z4'))} />
      </Card>
      <Card.Divider/>
      </View>
      )
      } 
    </View>
  );
}
{/*Stylings for the page*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  }
});
