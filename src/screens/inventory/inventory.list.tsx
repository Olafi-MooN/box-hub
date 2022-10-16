import { Box } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
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
    (async () => {
      if (deleteClick.id) {
        await InventoryFunctions().deleteId(`id = ${deleteClick.id}`).then(() => {
          handleGetInventories();
        });
      }
    })();
  }, [deleteClick]);

  const handleGetInventories = useCallback(async () => {
    const data = (await InventoryFunctions().getAll()).rows._array as Inventory.IInventoryProps[];
    const dataFormatted = data.map(item => { return { ...item, quantity: `${item.quantity} ${item.unityMeasure.toString().toUpperCase()}` } })
    setData(dataFormatted);
  }, [])

  useEffect(() => {
    handleGetInventories();
  }, [handleGetInventories])

  const mock = {
    body: data,
    columns: [{ name: 'name', size: '60%' }, { name: 'quantity', size: '30%' }]
  } as IBoxTableProps;

  return (
    <>
      <Box alignItems="center" height={Dimensions.get('window').height - 120 - 60}>
        <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Adicionar produto</BoxText>
        <BoxTable
          body={mock.body}
          columns={mock.columns}
          setClickEdit={setEditClick}
          setClickDelete={setDeleteClick} />
      </Box>
    </>
  );
};

export { InventoryList }