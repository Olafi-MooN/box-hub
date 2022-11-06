import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import Icon from '@expo/vector-icons/MaterialIcons'
import { Actionsheet, HStack, ScrollView } from 'native-base';

interface BoxModalProps {
  modalizeProps?: ModalizeProps;
  children?: React.ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenModal: boolean;
}

export const BoxModal = ({ modalizeProps, onOpenModal, children, setOpenModal }: BoxModalProps) => {

  useEffect(() => {
    if (onOpenModal) {
      setOpenModal(true);
    }
    else {
      setOpenModal(false);
    }
  }, [onOpenModal])

  return (
    <Actionsheet isOpen={onOpenModal} onClose={() => setOpenModal(false)}>
      <Actionsheet.Content width={'100%'}>

        <HStack space={3} w={'100%'} justifyContent="flex-end" p={4}>
          <Icon name={'close'} size={25} onPress={() => {
            setOpenModal(false);
          }}></Icon>
        </HStack>
        <HStack space={3} w={'100%'} justifyContent="center" p={4}>
          <ScrollView>
            {children}
          </ScrollView>
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};