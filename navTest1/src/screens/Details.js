import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Details(){
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40}}>Details</Text>

            <TouchableOpacity
            onPress={goBack}
                style={{top: 20, width: 200, backgroundColor: "#43425D" , alignItems: 'center', padding: 8, borderRadius: 8}}>

                <Text style={{color: "#FFF"}}>Voltar</Text> 
            </TouchableOpacity>
        </View>
    )

}