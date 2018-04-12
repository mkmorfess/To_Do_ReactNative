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
      let newData = JSON.parse(response.data);
      this.setState({toDo: newData})
      console.log(this.state.toDo)
    }).catch(err => {
      console.log("Error: " + err);
    })
  }



  render() {
    return (
      <View style={styles.container}>

        <View style={styles.divContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type in a movie..."
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity onPress={this.onHandleSubmit}>
            <View>
              <Text>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>

        {(!this.state.toDo) ?
          <View style={styles.mainCard}>
          </View> :
          <Card>
            <CardImage
              source={{ uri: this.state.toDo.Poster }}
              title={this.state.toDo.Title}
            />
            <CardContent text={`Year Released: ${this.state.toDo.Year}`} />
            <CardContent text={`Rated: ${this.state.toDo.Rated}`} />
            <CardContent text={`Plot: ${this.state.toDo.Plot}`} />
          </Card>}



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
  divContainer: {
    flex: 1,
    height: 55,
    margin: 25,
  },
  textInput: {
    
  },
  mainCard: {
    flex: 5
  },
});