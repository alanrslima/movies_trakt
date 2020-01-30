import React from 'react';
import { Modal, View } from 'react-native';

import { Container } from './styles';

export default function Detail(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: 'red', marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        
      </View>

    </Modal>
  );
}
