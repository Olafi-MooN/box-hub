import React, {  } from 'react';
import { Button, Stack } from 'native-base';
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
      <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Deseja realmente excluir ?</BoxText>
      <Stack direction='row' justifyContent={'space-between'} paddingX={'20px'}>
        <Button size='sm' w={'48%'} variant='outline' colorScheme='orange'>
          Não
        </Button>
        <Button size='sm' w={'48%'} colorScheme='orange' onPress={handleSubmit}>
          Sim
        </Button>
      </Stack>
    </BoxModal>
  );
};

export { DialogConfirm }
