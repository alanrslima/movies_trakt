import React from 'react';
import { View } from 'react-native';

import { 
  Circle,
  Square, 
} from './styles';

export default function Album(props) {

  if (props.type === 'circle') {
    return (
      <Circle />
    )
  } else if (props.type === 'square') {
    return (
      <Square />
    );
  }
}
