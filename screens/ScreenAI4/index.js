import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenComponent = () => {
  const [workOrder, setWorkOrder] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = () => {
    const url = `https://example.com?workOrder=${workOrder}&model=${model}`; // Inject the url into your desired logic

    console.log(url);
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Work Order" value={workOrder} onChangeText={setWorkOrder} />
      <TextInput style={styles.input} placeholder="Model" value={model} onChangeText={setModel} />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {}
});
export default ScreenComponent;