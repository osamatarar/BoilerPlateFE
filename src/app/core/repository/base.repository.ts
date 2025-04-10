import { inject, Injectable } from '@angular/core';
import { HttpClientHelper } from './httpclienthelper';
import { IRepository } from './repository.interface';

@Injectable()
export abstract class BaseRepository<T> implements IRepository<T> 
{
  public httpClient = inject(HttpClientHelper);
  
  public async GetAll(url:string, params?: any): Promise<T[]> 
  {
    return await this.httpClient.Get<T[]>(url,params);
  }

  public async GetById(url:string,id: string | number): Promise<T>
  {
    return await this.httpClient.Get<T>(`${url}/${id}`);
  }

  public async Create(url:string,entity: T): Promise<T> 
  {
    return await this.httpClient.Post<T>(url, entity);
  }

  public async Update(url:string,id: string | number, entity: T): Promise<T> 
  {
    return await this.httpClient.Put<T>(`${url}/${id}`, entity);
  }

  public async Delete(url:string,id: string | number): Promise<boolean> 
  {
    return await this.httpClient.Delete<boolean>(`${url}/${id}`);
  }

} 