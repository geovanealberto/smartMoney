import React from 'react';
import {View, TouchableOpacity,Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = 2064.35;
  return (
    <View style={styles.container}>
      <LinearGradient 
          colors={[Colors.violet, Colors.blue]} 
          style={styles.container}>
        <BalancePanelLabel currentBalance ={currentBalance} />
        <BalancePanelChart />     
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
          <Icon name="add" size={30} color={Colors.white}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
  
  paddingVertical:10,
  },

  button:{
    backgroundColor:Colors.green,
    width:50,
    height:50,
    borderRadius: 150,
    alignSelf:'flex-end',
    alignItems:'center',
    justifyContent:'center',
    marginTop: -25,
    marginRight:10,
    shadowColor: Colors.black,
    elevation:5,
  },
});

export default BalancePanel;
