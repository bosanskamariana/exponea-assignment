import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventSelectBoxComponent } from './event-select-box/event-select-box.component';
import { AttributeSelectBoxComponent } from './attribute-select-box/attribute-select-box.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AttributeComponent } from './attribute/attribute.component';
import { OperatorSelectBoxComponent } from './operator-select-box/operator-select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    EventSelectBoxComponent,
    OperatorSelectBoxComponent,
    AttributeSelectBoxComponent,
    AttributeComponent,
  ],
  entryComponents: [EventSelectBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
