import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityComponent } from "./components/activity/activity.component";
import { DettaglioComponent } from "./components/dettaglio/dettaglio.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full' },
    { path: 'list', component: ListComponent},
    { path: 'home', component: ActivityComponent},
    { path: 'detail/:id', component: DettaglioComponent},
    { path: '**', redirectTo: 'home'}
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