import React, { useEffect, useState } from 'react';
import { BoxButton } from '../../components/buttons/button';
import { BoxText } from '../../components/text/text';
import { Box, FormControl, Stack, Input, WarningOutlineIcon, Select, CheckIcon } from 'native-base';
import { InventoryFunctions } from './inventory.functions';
import { BoxAlert } from '../../components/alert/alert';
import { activeDebounce } from '../../utils/debounce';
import { Dimensions } from 'react-native';

interface InventoryFormProps {
  inventoryId?: number;
}

const InventoryForm = (props: InventoryFormProps) => {
  const { inventoryId } = props;
  const listUnities = [
    { text: 'Quilograma', value: 'KG' },
    { text: 'Grama', value: 'G' },
    { text: 'Litro', value: 'L' },
  ];
  const [unitMeasurement, setUnitMeasure] = useState<Inventory.UnityMeasureType>();
  const [active, setActive] = useState<boolean>(false);
  const [values, setValues] = useState<Inventory.IInventoryProps>({} as Inventory.IInventoryProps);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (inventoryId !== undefined && inventoryId) {
        setIsLoading(true);
        const result = await InventoryFunctions().getId(`id = ${inventoryId}`);
        if (result.success) {
          setValues(result.data);
          setIsLoading(false);
        }
      }
    })()
  }, [inventoryId!])

  const handleSubmit = async () => {
    const result = await InventoryFunctions().submit(values);
    if (result.success) {
      setActive(true);
      activeDebounce(setActive, 5000);
      setValues({} as Inventory.IInventoryProps);
      setUnitMeasure({} as Inventory.UnityMeasureType)
    }
  };

  return (
    <>
      <Box alignItems="center" height={Dimensions.get('window').height - 120 - 60} width={'100%'}>
        <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Adicionar produto</BoxText>
        {!isLoading &&
          <Box w="100%" maxWidth="400px">
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Name</FormControl.Label>
                <Input type="text" placeholder="Nome do produto" value={values?.name} onChange={(e) => setValues(prev => { return { ...prev, ...{ name: e.nativeEvent.text } } })} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Este campo é obrigatório.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack mx="4">
                <FormControl.Label>Quantidade </FormControl.Label>
                <Input type="text" placeholder="Quantas unidades do produto você possui?" onChange={(e) => setValues(prev => { return { ...prev, ...{ quantity: e.nativeEvent.text } } })} value={values?.quantity?.toString()} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Este campo é obrigatório.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack mx="4">
                <FormControl.Label>Unidade de medida</FormControl.Label>
                <Select selectedValue={values?.unityMeasure ?? unitMeasurement} accessibilityLabel="Escolha uma unidade de medida" placeholder="Escolha uma unidade" _selectedItem={{
                  bg: "orange.300",
                  borderRightRadius: 6,
                  borderLeftRadius: 6,
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={
                  (itemValue: string) => {
                    setUnitMeasure(itemValue as Inventory.UnityMeasureType);
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
        }
        {active &&
          <BoxAlert data={[{ status: 'success', title: 'Produto adicionado com sucesso!' }]} setActive={setActive}></BoxAlert>
        }
      </Box>
    </>
  );
}

export { InventoryForm };