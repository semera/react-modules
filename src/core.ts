// ********************************************************************************
// Common lib
// ********************************************************************************

export interface IConfiguration {
  hasMiddleName: boolean;
  hasBillingModule: boolean;
}

export interface IMenuItem {
  name: string;
  caption: string;
}

export default interface ICisModule {
  GetMenu(): IMenuItem;
  GetComponent(): JSX.Element;
}
