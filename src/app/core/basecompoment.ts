import { Router } from "@angular/router";
import { LoaderService } from "../service/theme/loader.service";
import { inject, Injectable, OnInit } from '@angular/core';
import { BaseRepository } from "./repository/base.repository";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CreateFormFromModel } from "./forms/form-generator";

@Injectable()
export abstract class BaseComponent<T> extends BaseRepository<T> implements OnInit
{ 
  public router = inject(Router);
  protected loaderService = inject(LoaderService);

  ngOnInit(): void 
  {
    console.log("BaseComponent ngOnInit called");
  }

  protected ShowLoader(): void 
  {
    this.loaderService.show();
  }

  protected HideLoader(): void 
  {
    this.loaderService.hide();
  }
}

@Injectable()
export abstract class FormBaseComponent<T, M> extends BaseComponent<T>
{
  public abstract FormModel: T;
  protected FormBuilder = inject(FormBuilder); 
  public Form: FormGroup = this.FormBuilder.group({});

  
  override ngOnInit(): void 
  {
    this.Form = CreateFormFromModel(this.FormModel, this.FormBuilder);
  }

}