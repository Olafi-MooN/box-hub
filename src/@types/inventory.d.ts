export declare global {
  namespace Inventory {

    enum EUnityMeasure {
      'Kilo Grama',
      'Grama',
      'Mili Litro',
      'Litro'
    }

    interface IInventoryProps {
      id?: string;
      name: string;
      quantity: string;
      unityMeasure: unityMeasure;
      created_at: timestamp;
      updated_at: timestamp;
    }

  }
}