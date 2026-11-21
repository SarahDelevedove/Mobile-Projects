import React, {useState, useEffect} from 'react';
import {  Text, View, Image,  TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Presentation = ({name}) => {
  return (
    <View style= {{alignItems: 'center' }}>
      <Text style= {{ fontSize: 26}}>Este é o {name}!</Text>
    </View>

  )
}

export default function ToothPresentation () {
const [count, setCount]= useState(0);
const [carinhotot, setCarinhotot] = useState (0);
const [msg, setMsg] = useState('');

let img = 'https://i.pinimg.com/736x/aa/66/56/aa66562d4c479aad9ee0a45d8ee65820.jpg'

function carinho(){
  setCount(count+1);
}

function total (){
  setCarinhotot(carinhotot + 1);

}

useEffect(() => {
  setMsg('Carinhos recebidos ou resetados ' + carinhotot + ' vezes');
}, [carinhotot])

  return(
    <View style= {{alignItems: 'center', top: 100}}>

      <Presentation name="Banguela" />
      <Image 
        source= {{uri: img}}
        style= {{width: 180, height: 320, top: 25}}
      />
      
      <View style= {{display: 'flex', flexDirection: 'row', top: 30, alignItems: 'center'}}>
       <Ionicons name='heart' size={28} color='red'/>
       <Text style= {{fontSize: 26, color: 'red', paddingHorizontal: 5}}> {count} carinhos </Text>
      </View>

      <TouchableOpacity onPress={()=> {carinho(); total ();}} style= {{top: 50, backgroundColor: 'green', width: 150, padding: 10}}>
        <Text style={{ color: '#FFFAFA', textAlign: 'center'}}>
          Fazer carinho no Banguela
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> {setCount(0); total ();}} style= {{top: 75, backgroundColor: 'green', width: 150, padding: 10}}>
        <Text style={{ color: '#FFFAFA', textAlign: 'center'}}>
          Reset
        </Text>
      </TouchableOpacity>

      <Text style={{top: 100, fontSize: 10}}>{msg}</Text>
    </View>
  )
}
