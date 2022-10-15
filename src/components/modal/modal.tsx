import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import Icon from '@expo/vector-icons/MaterialIcons'
import { HStack } from 'native-base';

interface BoxModalProps {
  modalizeProps?: ModalizeProps;
  children?: React.ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenModal: boolean;
}

export const BoxModal = ({ modalizeProps, onOpenModal, children, setOpenModal }: BoxModalProps) => {
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    if (onOpenModal) modalizeRef.current?.open();
  }, [onOpenModal])

  return (
    <Modalize
      ref={modalizeRef}
      onClosed={() => setOpenModal(false)}
      HeaderComponent={
        <HStack space={3} justifyContent="flex-end" p={4}>
          <Icon name={'close'} size={25} onPress={() => {
            setOpenModal(false);
            modalizeRef.current?.close();
          }}></Icon>
        </HStack>
      }
      modalHeight={Dimensions.get('window').height - 120}
      {...modalizeProps}>
      {children}
    </Modalize>
  );
};