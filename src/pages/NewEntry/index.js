import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
const NewEntry = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="Gps" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
