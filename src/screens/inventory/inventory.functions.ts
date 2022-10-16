import { sqlite } from "../../database/querysModel";

function InventoryFunctions() {

  const submit = async (props: Inventory.IInventoryProps): Promise<Api.ApiResult> => {
    const { name, quantity, unityMeasure } = props;
    const res = await sqlite().insert('Inventories', ['name', 'unityMeasure', 'quantity'], {name, unityMeasure, quantity});
    return { success: res.rowsAffected >= 1 } as Api.ApiResult;
  }

  const getAll = async () => {
    const res = await sqlite().selectAll('Inventories');
    return res;
  }

  const deleteId = async (condition: string) => {
    const res = await sqlite().exclude('Inventories', condition);
    return res;
  }

  return {
    submit,
    getAll,
    deleteId
  }
}


export { InventoryFunctions };
