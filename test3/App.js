import React from 'react';
import {  Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';

const Presentation = ({name}) => {
  return (
    <View style= {{alignItems: 'center' }}>
      <Text style= {{ fontSize: 26}}>Este é o {name}!</Text>
    </View>

  )
}

export default function ToothPresentation () {
let img = 'https://i.pinimg.com/736x/aa/66/56/aa66562d4c479aad9ee0a45d8ee65820.jpg'

  return(
    <View style= {{alignItems: 'center', top: 100}}>
      <Presentation name="Banguela" />
      <Image 
        source= {{uri: img}}
        style= {{width: 180, height: 320, top: 25}}
        />

      <TouchableOpacity style= {{top: 50, backgroundColor: 'green', width: 150, padding: 10}}>
        <Text style={{ color: '#FFFAFA', textAlign: 'center'}}>
          Fazer carinho no Banguela
        </Text>
      </TouchableOpacity>

      <TextInput
        placeholder='Você gosta do Banguela?'
        style= {{top: 100 }}
      />
    </View>
  )
}
