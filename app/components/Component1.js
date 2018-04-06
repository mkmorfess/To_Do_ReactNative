import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import axios from 'axios';

export default class Component1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onHandleSubmit = () => {
    console.log("Works")

    axios.get("/api/todos").then(response => {
      console.log(response)
    })

    // fetch("/api/todos", {
    //   method: 'GET'
    // }).then(response => {
    //   console.log(response.json())
    // })
  }



  render() {
    return (
      <View style={styles.container}>
      
        {/* <View style={styles.textInput}><Text style={styles.theText}>Test1</Text></View>
        <View style={styles.textInput}><Text style={styles.theText}>Test2</Text></View>
        <View style={styles.textInput}><Text style={styles.theText}>Test3</Text></View> */}
        {/* <Card style={styles.textInput}>
            <CardContent text="To-Do List!" />
            <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
                onPress={() => this.onHandleSubmit()}
                title="Submit"
                color="#FEB557"
              />
            </CardAction>
          </Card> */}

        <TextInput
          style={styles.theText}
          placeholder="Add to your To-Do List"
          onChangeText={(text) => this.setState({ text })}
        />

        <TouchableOpacity style={styles.textInput} onPress={() => this.onHandleSubmit()}>
          <View style={styles.textInput}>
            <Text style={styles.submitButton}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignSelf: 'stretch'
  },
  theText: {
    height: 44,
    color: "#fff",
    marginTop: 25
  },
  textInput: {
    flex: 1
  },
  newInput: {
    paddingTop: 25,
    height: 66
  }, 
  submitButton: {
    color: "#fff",
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
});