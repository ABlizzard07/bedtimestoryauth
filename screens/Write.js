import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from '../config.js'
import firebase from 'firebase'

export default class Write extends React.Component {
   constructor(){
      super();
      this.state = {
        title: '',
        author: '',
        story: ''
      }
   }

   submitStory = () => {
      db.collection('Story').add({
         storyTitle: this.state.title,
         storyAuthor: this.state.author,
         fullStory: this.state.story
       });
       this.setState({
          title: '',
          author: '',
          story: ''
       })
       ToastAndroid.show('The story has been submitted.',ToastAndroid.SHORT);
   }
    render(){
        return(
           <KeyboardAvoidingView>
            
            <View style = {styles.container}>

             <TextInput style = {styles.input} onChangeText={(text) => {
                this.setState({
                  title: text,
                });
              }} value = {this.state.title} placeholder = "Title"/>

             <TextInput style = {styles.input} onChangeText={(text) => {
                this.setState({
                  author: text,
                });
              }} value = {this.state.author} placeholder = "Author"/>
              
             <TextInput style = {styles.input} onChangeText={(text) => {
                this.setState({
                   story: text,
                })
             }} value = {this.state.story} placeholder = "Write your story" multiline = {true}/>

             <TouchableOpacity style = {styles.goButton} onPress = {this.submitStory}><Text style = {styles.buttonText}>Submit</Text></TouchableOpacity>
            </View>
          
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     inputBox: {
        marginTop: 80,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 4,
        textAlign: 'center'
     }, 
     goButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10
     },
     buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
     },
});
  