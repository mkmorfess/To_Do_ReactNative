import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
        <View style={styles.textInput}>
          
            <TextInput 
              style={styles.newInput}
              placeholder="Add to your To-Do List"
              onChangeText={(text) => this.setState({ text })}
              />
            <TouchableOpacity style={styles.submitButton} onPress={() => this.onHandleSubmit()}>
              <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
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