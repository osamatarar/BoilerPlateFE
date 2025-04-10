import { Router } from "@angular/router";
import { LoaderService } from "../service/theme/loader.service";
import { inject, Injectable } from '@angular/core';
import { BaseRepository } from "./repository/base.repository";

@Injectable()
export abstract class BaseComponent<T> extends BaseRepository<T>
{

  public router = inject(Router);
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
