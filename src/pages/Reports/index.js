import React from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Reports = () => {
  return (
    <View>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label=" Todas as Categorias" />
        </Picker>

        <Picker>
          <Picker.Item label=" Ultimos 7 Dias" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
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
