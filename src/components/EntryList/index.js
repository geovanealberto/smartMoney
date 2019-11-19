import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

import {getEntries} from '../../services/Entries';

const EntryList = ({}) => {
  [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <Container title="Ultimos Lançamentos"
      actionLabelText="Ultimos 7 dias"
      actionButtonText="Ver Mais"
      onPressActionButton={()=>{}}>
      <FlatList
        data={entries}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <View>
            <Text style={styles.entry}>
              - {item.description} - ${item.amount}
            </Text>
          </View>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

});

export default EntryList;
