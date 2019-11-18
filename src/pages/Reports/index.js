import React from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Reports = () => {
  const currentBalance = 2065.35;

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustivel', amount: 100},
    {key: '3', description: 'Aluguel', amount: 150},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1300},
  ];

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
  ];

  return (
    <View>
      <BalanceLabel currentBalance = {currentBalance} />
      <View>
        <Picker>
          <Picker.Item label=" Todas as Categorias" />
        </Picker>

        <Picker>
          <Picker.Item label=" Ultimos 7 Dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped = {entriesGrouped} />
      <EntryList entries = {entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //fles:1,
  },
});
export default Reports;
