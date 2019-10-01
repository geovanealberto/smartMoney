import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = () => {
  return (
    <View>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca:R$10'},
          {key: 'Supermercado:R$100'},
          {key: 'Posto Impiranga: R$90'},
          {key: 'lojas Americanas: R$200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
