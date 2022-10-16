import { sqlite } from "../../database/querysModel";

function InventoryFunctions() {

  const submit = async (props: Inventory.IInventoryProps): Promise<Api.ApiResult> => {
    const res = await sqlite().insert('Inventories', ['name', 'quantity', 'unityMeasure'], props);
    return { success: res.rowsAffected >= 1 } as Api.ApiResult;
  }

  const getAll = async () => {
    const res = await sqlite().selectAll('Inventories');
    return res;
  }

  return {
    submit,
    getAll
  }
}


export { InventoryFunctions };
