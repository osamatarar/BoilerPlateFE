import { Observable } from 'rxjs';

export interface IRepository<T> 
{
  GetAll(): Observable<T[]>;
  GetById(id: string | number): Observable<T>;
  Create(item: T): Observable<T>;
  Update(id: string | number, item: T): Observable<T>;
  Delete(id: string | number): Observable<boolean>;

} 