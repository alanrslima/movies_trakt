import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { teste } from '../../store/ducks/movies';

// import { Container } from './styles';

export default function List() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(teste());
  })

  return (
    <View />
  );
}
