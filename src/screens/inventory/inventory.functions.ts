import { sqlite } from "../../database/querysModel";

function InventoryFunctions() {

  const submit = async (props: Inventory.IInventoryProps): Promise<Api.ApiResult> => {
    const { name, quantity, unityMeasure } = props;
    const res = await sqlite().insert('Inventories', ['name', 'unityMeasure', 'quantity'], { name, unityMeasure, quantity });
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

  const getId = async (condition: string): Promise<Api.ApiResult> => {
    const res = await sqlite().selectConditional('Inventories', condition);
    return { data: res?.rows?.item(0), success: res?.rows?.item(0)?.id! ? true : false } as Api.ApiResult;
  }


  return {
    submit,
    getAll,
    deleteId,
    getId
  }
}


export { InventoryFunctions };
