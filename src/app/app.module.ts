import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBussesComponent } from './search-busses/search-busses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusListSearchComponent } from './bus-list-search/bus-list-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBussesComponent,
    BusListSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
