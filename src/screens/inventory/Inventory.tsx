import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { BoxCard } from '../../components/cards/cards';
import { BoxModal } from '../../components/modal/modal';
import { BoxText } from '../../components/text/text';
import { InventoryForm } from './inventory.form';
import Icon from '@expo/vector-icons/MaterialIcons';
import { InventoryList } from './inventory.list';

const Inventory = () => {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalView, setOpenModalView] = useState<boolean>(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <BoxText twStyle='text-stone-900 text-4xl p-4 font-bold'>Estoque</BoxText>
      <BoxCard
        onPress={() => setOpenModal(true)}
        description='Adicione produtos no seu estoque, para criar receitas!'
        title='Adicionar produtos no estoque'
        badge={<Icon name={'add-box'} size={24} color={'white'} />} />
      <BoxCard
        onPress={() => setOpenModalView(true)}
        description='Adicione produtos no seu estoque, para criar receitas!'
        title='Visualizar produtos em estoque'
        badge={<Icon name={'preview'} size={24} color={'white'} />} />

      <BoxModal onOpenModal={openModal} setOpenModal={setOpenModal}>
        <InventoryForm />
      </BoxModal>
     
      <BoxModal onOpenModal={openModalView} setOpenModal={setOpenModalView}>
        <InventoryList />
      </BoxModal>
    </View>
  )
}

export { Inventory };