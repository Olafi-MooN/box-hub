import React, { } from 'react';
import { Button, HStack, Stack, Text } from 'native-base';
import { BoxModal } from '../modal/modal';
import { BoxText } from '../text/text';

interface IDialogConfirmProps {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: any;
}

const DialogConfirm = (props: IDialogConfirmProps) => {
  const { openDialog, setOpenDialog, handleSubmit } = props;
  return (
    <BoxModal onOpenModal={openDialog} setOpenModal={setOpenDialog} modalizeProps={{ modalHeight: 200 }}>
      <HStack display={'flex'} flexDirection={'column'} height={'100%'} p={0} m={0}>
        <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Deseja realmente excluir ?</BoxText>
        <Stack direction='row' justifyContent={'space-between'} paddingX={'20px'}>
          <Button size='sm' w={'48%'} height={70} variant='outline' colorScheme='orange'>
            <Text color={'orange.400'} fontSize={'lg'}>Não</Text>
          </Button>
          <Button size='sm' w={'48%'} height={70} colorScheme='orange' onPress={handleSubmit}>
            <Text color={'amber.100'} fontSize={'lg'}>Sim</Text>
          </Button>
        </Stack>
      </HStack>
    </BoxModal>
  );
};

export { DialogConfirm }
