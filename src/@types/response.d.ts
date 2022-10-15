export declare global {
  namespace Api {
    interface ApiResult<T = any> {
      data: T;
      success?: boolean;
      message?: Array<string>;
      errorMessage?: string | undefined;
    }
  }
}