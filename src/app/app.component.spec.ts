import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EventSelectBoxComponent } from './event-select-box/event-select-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AttributeSelectBoxComponent } from './attribute-select-box/attribute-select-box.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AttributeComponent } from './attribute/attribute.component';
import { OperatorSelectBoxComponent } from './operator-select-box/operator-select-box.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EventSelectBoxComponent,
        OperatorSelectBoxComponent,
        AttributeSelectBoxComponent,
        AttributeComponent,
      ],  imports: [
        BrowserModule,
        FormsModule,
        NgSelectModule
      ],
      providers: [],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('CUSTOMER FILTER');
  });
});
