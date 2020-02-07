import React, { Component } from 'react'

import {
    Image,
    Button,
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

  class Btc extends Component {
    constructor(props) {
        super(props);        
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
            
      }

      // its pulling data from the wrong place. Need to direct it to the computers express server somehow.
      getData(){
        setTimeout(() => {
           fetch('http://192.168.0.11:5000/data', { credentials: "include",
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }})
          .then((data) => data.text())       
          .then(
            data => {
             
            //  console.log('test')
             console.log(data)
              this.setState({                            
              
              });
            },         
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
            )           
        }, 1000)
      }
        
        componentDidMount() {
          this.getData()
          // console.log('test')
        // this._isMounted = false;
    }

      render(){
        return(
          <Text>test</Text>
        )
      }


  }

  export default Btc