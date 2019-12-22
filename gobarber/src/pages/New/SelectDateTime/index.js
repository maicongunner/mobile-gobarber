import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        paddingLeft: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SelectProvider');
        }}
      >
        <Icon name="chevron-left" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  ),
});
