import { LoaderService } from "../service/theme/loader.service";

export abstract class BaseComponent {

  constructor(protected loaderService: LoaderService) {}

  protected showLoader(): void 
  {
    this.loaderService.show();
  }

  protected hideLoader(): void 
  {
    this.loaderService.hide();
  }

  // Template Method for Load Data
  protected abstract loadData(): void;

  init(): void 
  {
    this.showLoader();

    this.loadData();

    this.hideLoader();
  }
}
