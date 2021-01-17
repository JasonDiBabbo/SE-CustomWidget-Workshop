import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WidgetControlComponent } from './widget-control/widget-control.component';
import { WidgetAreaComponent } from './widget-area/widget-area.component';

@NgModule({
  declarations: [AppComponent, WidgetControlComponent, WidgetAreaComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
