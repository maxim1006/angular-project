import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./modules/shared/components/page-not-found/page-not-found.component";
import {HomeComponent} from "./modules/home/home.component";



const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'lazy', loadChildren: './modules/lazy/lazy.module#LazyModule'},
    {path: '**', component: PageNotFoundComponent},
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NgRoutingModule { }
