import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FetchResult } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import axios from 'axios';

export default class Component1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '',
                   toDo: '' };
  }

  onHandleSubmit = () => {
    console.log("Works")

    axios.get("http://192.168.1.233:4000/api/movies").then(response => {
      console.log("Response: " + response.data)
      this.setState({toDo: response})
      console.log(this.state.toDo)
    }).catch(err => {
      console.log("Error: " + err);
    })

    // fetch("http://www.omdbapi.com/?apikey=135f4b95&t=fox+and+the+hound").then(response => {
    //   console.log(response)
    // }).catch(err => {
    //   console.log(err);
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

        <TouchableOpacity style={styles.textInput} onPress={this.onHandleSubmit}>
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