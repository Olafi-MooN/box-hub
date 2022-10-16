import { Box, Heading, HStack, Avatar, VStack, Spacer, FlatList, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { BoxTable, IBoxTableProps } from "../../components/table/table";
import { BoxText } from "../../components/text/text";
import { InventoryFunctions } from "./inventory.functions";

const InventoryList = () => {
  const [data, setData] = useState<Inventory.IInventoryProps[]>([] as Inventory.IInventoryProps[]);
  const [editClick, setEditClick] = useState<any>({} as any);
  const [deleteClick, setDeleteClick] = useState<any>({} as any);

  useEffect(() => { 
    console.log(editClick);
  }, [editClick]);

  useEffect(() => { 
    console.log(deleteClick);
  }, [deleteClick]);

  useEffect(() => {
    (async () => {
      const data = await InventoryFunctions().getAll();
      setData(data.rows._array as Inventory.IInventoryProps[]);
    })()
  }, [])

  const mock = {
    body: [
      {name: 'produto1', unidade: '600 mg'},
      {name: 'produto2', unidade: '200 mg'},
      {name: 'produto3', unidade: '200 mg'},
      {name: 'produto4', unidade: '200 mg'},
      {name: 'produto5', unidade: '200 mg'},
      {name: 'produto6', unidade: '200 mg'},
    ],
    columns: [{ name: 'name', size: '60%' }, { name: 'unidade', size: '30%' }]
  } as IBoxTableProps;

  return (
    <>
      <Box alignItems="center" height={Dimensions.get('window').height - 120 - 60}>
        <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Adicionar produto</BoxText>
        <BoxTable 
          body={mock.body} 
          columns={mock.columns} 
          setClickEdit={setEditClick} 
          setClickDelete={setDeleteClick}/>
      </Box>
    </>
  );
};

export { InventoryList }