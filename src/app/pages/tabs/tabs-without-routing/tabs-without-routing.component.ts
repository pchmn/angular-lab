import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { HomeTabComponent } from './../../../shared/components/tabs/home-tab/home-tab.component';
import { TabComponent } from './../../../shared/components/tabs/tab.component';
import { TabHostDirective } from './directives/tab-host.directive';

@Component({
  selector: 'app-tabs-without-routing',
  templateUrl: './tabs-without-routing.component.html',
  styleUrls: ['./tabs-without-routing.component.scss']
})
export class TabsWithoutRoutingComponent implements OnInit, AfterViewInit {

  dynamicTabs: TabComponent[] = [];
  @ViewChild(TabHostDirective) tabHostDirective: TabHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.tabHostDirective);
    this.openTab('Home', '1', 'Premier test');
  }

  openTab(name: string, id: string, content: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeTabComponent);
    const viewContainerRef = this.tabHostDirective.viewContainer;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const homeTabComponentInstance = componentRef.instance as HomeTabComponent;
    homeTabComponentInstance.name = name;
    homeTabComponentInstance.id = id;
    homeTabComponentInstance.content = content;
    this.dynamicTabs.push(homeTabComponentInstance);
    this.selectTab(homeTabComponentInstance);
  }

  selectTab(tab: TabComponent) {
    this.dynamicTabs.forEach(item => item.active = false);
    tab.active = true;
    this.cdr.detectChanges();
  }

}
