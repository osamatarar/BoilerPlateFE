import { Router } from "@angular/router";
import { LoaderService } from "../service/theme/loader.service";
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: ''
})
export class BaseComponent 
{
  protected router = inject(Router);
  protected loaderService = inject(LoaderService);
  
  
  protected ShowLoader(): void 
  {
    this.loaderService.show();
  }

  protected HideLoader(): void 
  {
    this.loaderService.hide();
  }


}
