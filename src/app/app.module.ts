import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JournalListComponent } from './journals/journal-list.component'

@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
