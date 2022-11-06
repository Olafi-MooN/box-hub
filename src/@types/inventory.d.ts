export declare global {
  namespace Inventory {

    type UnityMeasureType = 'KG' | 'G' | 'L';

    interface IInventoryProps {
      id?: string;
      name: string;
      quantity: string;
      unityMeasure: EUnityMeasure;
      created_at: timestamp;
      updated_at: timestamp;
    }

  }
}