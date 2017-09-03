import './ng-polyfills';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {enableProdMode} from "@angular/core";
import {bootloader} from "@angularclass/hmr";

declare const Reflect: any;

if (process.env.STATIC) {
    //console.log("******************You are in Dev mode******************");
    platformBrowserDynamic().bootstrapModule(AppModule).then(():any => {});
} else if (process.env.HMR) {
   //console.log("******************You are in HMR mode******************");
    bootloader(main);
}

export function main() {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
}

