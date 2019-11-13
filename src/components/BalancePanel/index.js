import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = ({currentBalance}) => {
    const saldo = '2.000,35';
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance ={currentBalance} />

      <BalancePanelChart />

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   //flex: 1,
  },
});

export default BalancePanel;
