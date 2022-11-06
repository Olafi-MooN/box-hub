import { Box } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { DialogConfirm } from "../../components/dialog/dialog-confirm";
import { BoxModal } from "../../components/modal/modal";
import { BoxTable, IBoxTableProps } from "../../components/table/table";
import { BoxText } from "../../components/text/text";
import { InventoryForm } from "./inventory.form";
import { InventoryFunctions } from "./inventory.functions";

const InventoryList = () => {
  const [data, setData] = useState<Inventory.IInventoryProps[]>([] as Inventory.IInventoryProps[]);
  const [editClick, setEditClick] = useState<any>({} as any);
  const [deleteClick, setDeleteClick] = useState<any>({} as any);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  useEffect(() => {
    console.log(editClick.id);
    if(editClick.id) { 
      setOpenModalEdit(true);
    }
  }, [editClick]);

  useEffect(() => {
    if (deleteClick.id) {
      setOpenModalDelete(true);
    }
  }, [deleteClick]);

  const handleGetInventories = useCallback(async () => {
    const data = (await InventoryFunctions().getAll()).rows._array as Inventory.IInventoryProps[];
    const dataFormatted = data.map(item => { return { ...item, quantity: `${item.quantity} ${item.unityMeasure.toString().toUpperCase()}` } })
    setData(dataFormatted);
  }, [])

  const handleActionDelete = async () => {
    await InventoryFunctions().deleteId(`id = ${deleteClick?.id}`).then(() => {
      setOpenModalDelete(false);
      setDeleteClick({});
      handleGetInventories();
    });
  }

  useEffect(() => {
    handleGetInventories();
  }, [handleGetInventories])

  const boxTableObject = {
    body: data,
    columns: [{ name: 'name', size: '60%' }, { name: 'quantity', size: '30%' }]
  } as IBoxTableProps;

  return (
    <>
      <Box alignItems="center" height={Dimensions.get('window').height - 120 - 60}>
        <BoxText twStyle='text-stone-900 text-2xl p-4 font-bold'>Adicionar produto</BoxText>
        <BoxTable
          body={boxTableObject.body}
          columns={boxTableObject.columns}
          setClickEdit={setEditClick}
          setClickDelete={setDeleteClick} />
      </Box>

      <DialogConfirm openDialog={openModalDelete} setOpenDialog={setOpenModalDelete} handleSubmit={handleActionDelete} />
      <BoxModal onOpenModal={openModalEdit} setOpenModal={setOpenModalEdit}>
        <InventoryForm inventoryId={editClick.id}/>
      </BoxModal>
    </>
  );
};

export { InventoryList }