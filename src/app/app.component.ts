import { Component, ViewContainerRef, ViewChildren, QueryList, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { EventSelectBoxComponent } from './event-select-box/event-select-box.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(EventSelectBoxComponent) events: QueryList<EventSelectBoxComponent>;
  eventComponentFactory: ComponentFactory<EventSelectBoxComponent>;

  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.eventComponentFactory = this.componentFactoryResolver.resolveComponentFactory(EventSelectBoxComponent);
  }

  title = 'Custom filters';

  addFunnelStep() {
    this.viewContainerRef.createComponent(this.eventComponentFactory);
  }
}
