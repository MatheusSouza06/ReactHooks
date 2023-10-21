import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';


export default function App() {

  const [name, setName] = useState("Matheus")
  const [number, setNumber] = useState(1)
  const changeNumber = () => {
    setNumber( number * number)
    setNumber((prevNumber) => prevNumber + 1)
  }

  useEffect(() => {
    console.log("Roda a cada renderização.")
  })

  useEffect(() => {
    console.log("Número alterado.")
  },[number])

  useEffect(() => {
    console.log("Só executa uma vez.")
  },[])

  return (
    <View style={styles.container}>
      <Text>Meu nome é {name}.</Text>

      <TextInput
        onChangeText={setName}
        value={name}
        style={styles.input}
      />

      <Text>O número é {number}.</Text>
      <Button
        onPress={changeNumber}
        title='?'
        color="#844"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
