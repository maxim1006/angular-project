require("style-loader!../assets/base.less");

import {BrowserModule, HammerGestureConfig} from "@angular/platform-browser";
import {NgRoutingModule} from "./ng-routing.module";
import {AppComponent} from "./app.component";
import {createInputTransfer, createNewHosts, removeNgStyles} from "@angularclass/hmr";
import {ApplicationRef, NgModule} from "@angular/core";
import {HomeModule} from "./modules/home/home.module";


export class MyHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20} // override default settings
    }
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HomeModule,
        NgRoutingModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {}
    hmrOnInit(store) {
        if (!store || !store.state) return;

        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }
    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.state = {data: 'yolo'};
        store.restoreInputValues  = createInputTransfer();
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
