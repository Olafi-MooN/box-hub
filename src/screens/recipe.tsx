import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Button, Text } from 'react-native';

const Recipe = () => {
  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate('recipe');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Text>Dashboard</Text>
    </View>)
}

export { Recipe };