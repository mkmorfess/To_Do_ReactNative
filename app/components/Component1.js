import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class Component1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onHandleSubmit = () => {
    console.log(this.state.text)
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInput}><Text style={styles.theText}>Test1</Text></View>
        <View style={styles.textInput}><Text style={styles.theText}>Test2</Text></View>
        <View style={styles.textInput}><Text style={styles.theText}>Test3</Text></View>
        {/* <Card style={styles.textInput}>
            <CardContent text="To-Do List!" />
            <TextInput 
              placeholder="Add to your To-Do List"
              onChangeText={(text) => this.setState({ text })}
              />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    alignSelf: 'stretch'
  },
  theText: {
    backgroundColor: '#FEB557',
    marginTop: 25,
    justifyContent: 'space-between'
  },
  textInput: {
    flex: 1
  },
  newInput: {
    paddingTop: 25,
    height: 66
  }, 
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
});