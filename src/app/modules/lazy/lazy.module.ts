import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {LazyComponent} from "./lazy.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
    {path: '', component: LazyComponent},
];


@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [LazyComponent],
    declarations: [LazyComponent]
})
export class LazyModule {}


