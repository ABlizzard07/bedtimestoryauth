import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';



export default class Read extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        allStories: [],
        lastVisibleStory: null,
        search:''
      }
    }

    fetchMoreTransactions = async ()=>{
      var text = this.state.search.toUpperCase()
    
      const query = await db.collection("Story").where('storyId','==',text).startAfter(this.state.lastVisibleStory).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allStories: [...this.state.allStories, doc.data()],
          lastVisibleStories: doc
        })
      })
  }

    searchTransactions= async(text) =>{
        const storySearch =  await db.collection("Story").where('storyId','==',text).get()
        transaction.docs.map((doc)=>{
          this.setState({
            allStories:[...this.state.allStories,doc.data()],
            lastVisibleStory: doc
          })
        })
      }
    }

    componentDidMount = async ()=>{
      const query = await db.collection("Story").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [],
          lastVisibleTransaction: doc
        })
      })
    }
    render(){
      return (
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchBar}>
        <TextInput 
          style ={styles.bar}
          placeholder = "Search for a story"
          onChangeText={(text)=>{this.setState({search:text})}}/>
          <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchTransactions(this.state.search)}}>
            <Text>Search</Text>
          </TouchableOpacity>
          </View>

        <FlatList
          data={this.state.allStories}
          onEndReached ={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        /> 
        </View>
        </ScrollView>
      );
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })