import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ExampleTabComponent } from '@shared/components/tabs/example-tab/example-tab.component';
import { HomeTabComponent } from '@shared/components/tabs/home-tab/home-tab.component';
import { TabComponent } from '@shared/components/tabs/tab.component';
import { TabHostDirective } from './directives/tab-host.directive';

export enum TabType {
  Home,
  ExampleTab
}

@Component({
  selector: 'app-tabs-without-routing',
  templateUrl: './tabs-without-routing.component.html',
  styleUrls: ['./tabs-without-routing.component.scss']
})
export class TabsWithoutRoutingComponent implements OnInit, AfterViewInit {

  dynamicTabs: TabComponent[] = [];
  @ViewChild(TabHostDirective) tabHostDirective: TabHostDirective;
  private viewContainerRef: ViewContainerRef;
  private tabId = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.viewContainerRef = this.tabHostDirective.viewContainer;
    // Create home tab
    const homeComponent: HomeTabComponent = this.openTab(TabType.Home, 'Home', false) as HomeTabComponent;
    homeComponent.openNewTabEvent.subscribe(() => this.openTab(TabType.ExampleTab, 'Tab example', true));
  }

  openTab(tabType: TabType, name: string, closeable: boolean): TabComponent {
    // Create component
    let componentFactory;
    if (tabType === TabType.Home) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeTabComponent);
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleTabComponent);
    }
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    // Get instance and init it
    const homeTabComponentInstance = componentRef.instance as TabComponent;
    homeTabComponentInstance.id = `${this.tabId++}`;
    homeTabComponentInstance.name = name;
    homeTabComponentInstance.isCloseable = closeable;
    // Add tab to the array
    this.dynamicTabs.push(homeTabComponentInstance);
    // Select tab
    this.selectTab(homeTabComponentInstance);
    // Return the instance
    return homeTabComponentInstance;
  }

  selectTab(tab: TabComponent) {
    const activeTab = this.dynamicTabs.find(item => item.active === true);
    if (activeTab) {
      activeTab.scrollPosition = window.scrollY;
    }
    this.dynamicTabs.forEach(item => item.active = false);
    tab.active = true;
    tab.scrollToPreviousPosition();
    this.cdr.detectChanges();
  }

  closeTab(tab: TabComponent) {
    const indexOf = this.dynamicTabs.indexOf(tab);
    if (indexOf > -1) {
      this.dynamicTabs.splice(indexOf, 1);
      this.viewContainerRef.remove(indexOf);
      this.selectTab(this.dynamicTabs[0]);
    }
  }

}
