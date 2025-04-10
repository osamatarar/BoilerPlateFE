
export interface IRepository<T> {
  GetAll(url:string,params?: any): Promise<T[]>;
  GetById(url:string,id: string | number): Promise<T>;
  Create(url:string,entity: T): Promise<T>;
  Update(url:string,id: string | number, entity: T): Promise<T>;
  Delete(url:string,id: string | number): Promise<boolean>;
} 