import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { ListComponent } from './components/list/list.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ListComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
