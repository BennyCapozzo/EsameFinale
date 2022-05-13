import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityComponent } from "./components/activity/activity.component";
import { DettaglioComponent } from "./components/dettaglio/dettaglio.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
    { path: 'list', component: ListComponent},
    { path: 'home', component: ActivityComponent},
    { path: 'detail/:id', component: DettaglioComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}