import React from 'react';
import { View, Text } from 'react-native';

const Greeting = (props) => {
  return(
    <View style={{alignItems: 'center'}}> 
      <Text style={{fontsize: 26}}>Hello {props.name}</Text>
    </View>
  )


}

export default function LotsOfGreetings(){
  return(
    <View style={{alignItems: 'center', top: 100}}> 
      <Greeting name="Sarah" />
      <Greeting name="Gisele" />

    </View>
  )

}