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

        <View style={styles.title}>
          <Text style={styles.titleText}>Movie Search</Text>
        </View>

        <View style={styles.textInput}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Type in a movie..."
            placeholderTextColor="rgba(0,0,0,0.8)"
            onChangeText={(text) => this.setState({ text })}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={this.onHandleSubmit}>
          <View>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
        

        {(!this.state.toDo) ?
          <View>
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
    backgroundColor: '#1e90ff'
  },
  title: {
    marginTop: 50
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    margin: 20,
    marginTop: 50,
    padding: 10
  },
  button: {
    backgroundColor: "#000080",
    padding: 10,
    margin: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }

});