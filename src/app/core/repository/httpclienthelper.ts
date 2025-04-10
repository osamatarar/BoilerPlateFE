import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientHelper {
  private http = inject(HttpClient);
 
  public async Get<T>(url: string, params?: any): Promise<T> 
  {
    try {
      let httpParams = new HttpParams();
      if (params) {
        Object.keys(params).forEach(key => {
          httpParams = httpParams.set(key, params[key]);
        });
      }
      
      return await firstValueFrom(
        this.http.get<T>(url, { params: httpParams })
      );
    } catch (error) {
      this.HandleError(error);
    }
  }

  public async Post<T>(url: string, body: any): Promise<T> 
  {
    try {
      return await firstValueFrom(
        this.http.post<T>(url, body)
      );
    } catch (error) {
      this.HandleError(error);
    }
  }

  public async Put<T>(url: string, body: any): Promise<T> 
  {
    try {
      return await firstValueFrom(
        this.http.put<T>(url, body)
      );
    } catch (error) {
      this.HandleError(error);
    }
  }

  public async Delete<T>(url: string): Promise<T> 
  {
    try {
      return await firstValueFrom(
        this.http.delete<T>(url)
      );
    } catch (error) {
      this.HandleError(error);
    }
  }

  private HandleError(error: any): never {
    let errorMessage = 'An unknown error occurred';
    
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
} 