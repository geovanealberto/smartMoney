import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Container from '../Core/Container';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import Colors from '../../styles/Colors';

const entriesGrouped = [
  {key: '1', description: 'Alimentação', amount: 201},
  {key: '2', description: 'Combustível', amount: 12},
  {key: '3', description: 'Aluguel', amount: 120},
  {key: '4', description: 'Lazer', amount: 250},
  {key: '5', description: 'Outros', amount: 1200},
];

const EntrySummary = ({}) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <View style={styles.actionContainer}>
        <Text style={styles.actionLabel}>Últimos 7 dias</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="insert-chart" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    padding: 8,
  },
  
  title: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    color: Colors.white,
    marginTop: 3,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default EntrySummary;