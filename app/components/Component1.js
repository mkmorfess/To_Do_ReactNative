import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FetchResult, Image, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import axios from 'axios';

export default class Component1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '',
                   toDo: '' };
  }

  onHandleSubmit = () => {
    let newSearch = this.state.text
    newSearch = newSearch.trim();
    newSearch = newSearch.replace(/ /g,"+").toLowerCase();;
    axios.post("http://192.168.1.197:4000/api/movies", {
      params: {
        search: newSearch
      }}).then(response => {
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
        </View>

        <ScrollView style={styles.cardContainer}>
          {(!this.state.toDo) ?
            <View>
            </View> :
            
            <Card style={styles.card}>
              <View style={styles.viewMovieTitle}>
                <Text style={styles.movieTitle}>{this.state.toDo.Title}</Text>
              </View>
              <View style={styles.image}>
                <Image
                  style={{
                    width: 350,
                    height: 550,
                    borderColor: '#fff',
                    borderWidth: 2
                  }}
                  source={{ uri: this.state.toDo.Poster }}
                />
              </View>
              <View style={styles.movieInfo}>
                <CardContent style={styles.movieText} text={`Year Released: ${this.state.toDo.Year}\n\nRated: ${this.state.toDo.Rated}\n\nPlot: ${this.state.toDo.Plot}`} />
              </View>
            </Card>
            }

        </ScrollView>

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
  },
  card: {
    backgroundColor: "#fff",
    height: '100%'
  },
  divContainer: {
    flex: 1
  },
  cardContainer: {
    flex: 4
  },
  image: {
    flex: 6
  },
  movieInfo: {
    marginTop: 5,
    flex: 5
  },
  movieText: {
    width: "100%",
    height: "100%"
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center"
  },
  viewMovieTitle: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  }


});