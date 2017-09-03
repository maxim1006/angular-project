import './ng-polyfills';
import {enableProdMode} from "@angular/core";
import {platformBrowser} from "@angular/platform-browser";
import {AppModuleNgFactory} from "./app.module.ngfactory";

console.log("******************You are in prod mode******************");

enableProdMode();
platformBrowser().bootstrapModuleFactory(<any>AppModuleNgFactory).catch(error=>console.log(error));