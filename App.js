import React from 'react';
import { View, Text } from 'react-native';

const Greeting = () => {
  return(
    <View style={{alignItems: 'center'}}> 
      <Text style={{fontsize: 26}}>Hello World!</Text>
    </View>
  )


}

export default function LotsOfGreetings(){
  return(
    <View style={{alignItems: 'center', top: 100}}> 
      <Greeting />


    </View>
  )

}