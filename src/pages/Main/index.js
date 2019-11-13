import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 2000.35;

  const entriesGrouped = [
      {key: '1', description: 'Alimentação', amount: 200},
      {key: '2', description: 'Combustivel', amount: 100},
      {key: '3', description: 'Aluguel', amount: 150},
      {key: '4', description: 'Lazer', amount: 250},
      {key: '5', description: 'Outros', amount: 1300},
    ]
  
  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado', amount: 100},
    {key: '3', description: 'Posto Impiranga', amount: 90},
    {key: '4', description: 'lojas Americanas', amount: 200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance = {currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped = {entriesGrouped} />
      <EntryList entries = {entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
