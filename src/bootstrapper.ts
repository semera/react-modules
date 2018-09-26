import ICisModule, { IConfiguration } from "./core";

import BillingModule from "./module_billing";
import ValidationModule from "./module_validation";
import ReduxModule from "./module_redux";
import StyledModule from "./module_styled";
import SimpleModule from "./module_simple";
import TableModule from "./module_tablefilter";
import RegistryModule from "./module_registry";

// ********************************************************************************
// configuration
// ********************************************************************************

function GetConfiguration(): IConfiguration {
  return {
    hasMiddleName: false,
    hasBillingModule: true
  };
}

// ********************************************************************************
// Moudles
// ********************************************************************************

function GetRegisteredModules(): Array<ICisModule> {
  let mods = new Array<ICisModule>();
  if (GetConfiguration().hasBillingModule) mods.push(new BillingModule());
  //mods.push(new AdminModule());
  mods.push(new ReduxModule());
  mods.push(new ValidationModule());
  mods.push(new StyledModule());
  mods.push(new SimpleModule());
  mods.push(new TableModule());
  mods.push(new RegistryModule());
  return mods;
}

// ********************************************************************************
// Registry
// ********************************************************************************

// singleton based on
// https://www.cloudhadoop.com/2018/09/Typescript-singleton-pattern-example.html
export default class Boot {
  Modules: Array<ICisModule>;
  Configuration: IConfiguration;

  private static instance: Boot;
  private constructor() {
    this.Modules = GetRegisteredModules();
    this.Configuration = GetConfiguration();
  }
  static getInstance() {
    if (!Boot.instance) {
      Boot.instance = new Boot();
    }
    return Boot.instance;
  }
}
