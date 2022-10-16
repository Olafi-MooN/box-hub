import React, { useState } from 'react';
import { BoxButton } from '../../components/buttons/button';
import { BoxText } from '../../components/text/text';
import { Box, FormControl, Stack, Input, WarningOutlineIcon, Select, CheckIcon, HStack } from 'native-base';
import { InventoryFunctions } from './inventory.functions';
import { BoxAlert } from '../../components/alert/alert';
import { activeDebounce } from '../../utils/debounce';
import { Dimensions } from 'react-native';

const InventoryForm = () => {
  const listUnities = [
    { text: 'Kilo Grama', value: 'kg' },
    { text: 'Grama', value: 'g' },
    { text: 'Mili Litro', value: 'ml' },
    { text: 'Litro', value: 'l' },
  ];

  const [unitMeasurement, setUnitMeasure] = useState<string>();
  const [active, setActive] = useState<boolean>(false);
  const [values, setValues] = useState<Inventory.IInventoryProps>({} as Inventory.IInventoryProps);

  const handleSubmit = async () => {
    const result = await InventoryFunctions().submit(values);
    if (result.success) {
      setActive(true);
      activeDebounce(setActive, 5000);
    }
  };

  return (
    <>
      <Box alignItems="center" height={Dimensions.get('window').height - 120 - 60}>
        <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Adicionar produto</BoxText>
        <Box w="100%" maxWidth="400px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Name</FormControl.Label>
              <Input type="text" placeholder="Nome do produto" onChange={(e) => setValues(prev => { return { ...prev, ...{ name: e.nativeEvent.text } } })} />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Este campo é obrigatório.
              </FormControl.ErrorMessage>
            </Stack>
            <Stack mx="4">
              <FormControl.Label>Quantidade</FormControl.Label>
              <Input type="text" placeholder="Nome do produto" onChange={(e) => setValues(prev => { return { ...prev, ...{ quantity: e.nativeEvent.text } } })} />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Este campo é obrigatório.
              </FormControl.ErrorMessage>
            </Stack>
            <Stack mx="4">
              <FormControl.Label>Unidade de medida</FormControl.Label>
              <Select selectedValue={unitMeasurement} accessibilityLabel="Escolha uma unidade de medida" placeholder="Escolha uma unidade" _selectedItem={{
                bg: "orange.300",
                borderRightRadius: 6,
                borderLeftRadius: 6,
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={
                (itemValue: string) => {
                  setUnitMeasure(itemValue);
                  setValues(prev => { return { ...prev, ...{ unityMeasure: itemValue } } });
                }}>
                {listUnities.map((value, key) => <Select.Item label={value.text} value={value.value} key={key} />)}
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Este campo é obrigatório.
              </FormControl.ErrorMessage>
            </Stack>
            <BoxButton mx={4} my={8} onPress={() => handleSubmit()}>
              <BoxText >Salvar</BoxText>
            </BoxButton>
          </FormControl>
        </Box>
          {active &&
            <BoxAlert data={[{ status: 'success', title: 'Produto adicionado com sucesso!' }]} setActive={setActive}></BoxAlert>
          }
      </Box>
    </>
  );
}

export { InventoryForm };