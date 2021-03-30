import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import * as Speech from 'expo-speech';


export default function App(){

  const [text, setText] = useState('Bem vido, converta seus textos em áudio!');
  
// Transformando text em áudio
  function speek(){
    Speech.speak(text, {
    language: 'pt-BR'

    });
  }
  return(

    <View style={styles.container}>

{/* Input e botão */}
      <TextInput
      style={styles.input}
      onChangeText = {e => setText(e)}
      placeholder= "Digite algum texto..."
      />

      <Button
      style = {styles.button}
      title='Ouvir'
      onPress={speek}
      />

    </View>
  );
}

// Estilo do app 
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input:{
    width:'90%',
    height:50,
    borderWidth:1,
    borderColor: '#121212',
    borderRadius:10,
    padding:10,
    margin:10,
    color:'#000',
    fontSize:20,
  },

});