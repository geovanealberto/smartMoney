import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={[
          {key: 'Alimentação:R$200'},
          {key: 'Combustivel:R$100'},
          {key: 'Aluguel: R$150'},
          {key: 'Lazer: R$250'},
          {key: 'Outros: R$1300'},
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

export default EntrySummaryList;
