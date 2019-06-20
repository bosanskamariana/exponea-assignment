import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EventSelectBoxComponent } from './event-select-box/event-select-box.component';
import { AttributeSelectBoxComponent } from './attribute-select-box/attribute-select-box.component';
import { OperatorSelectBoxComponent } from './operator-select-box/operator-select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    EventSelectBoxComponent,
    AttributeSelectBoxComponent,
    OperatorSelectBoxComponent
  ],
  entryComponents: [EventSelectBoxComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
