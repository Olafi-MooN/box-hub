export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      inventory: undefined;
      recipe: undefined;
      product: undefined;
      dashboard: undefined;
    }
  }
  namespace ProductsModel { 
    interface Product { 
      id: string;
      name: string;
      quantity: string;
      unity: string;
    }
  }
}