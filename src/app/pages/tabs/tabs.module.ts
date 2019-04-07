import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeTabComponent } from 'src/app/shared/components/tabs/home-tab/home-tab.component';
import { SharedModule } from './../../shared/shared.module';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabHostDirective } from './tabs-without-routing/directives/tab-host.directive';
import { TabsWithoutRoutingComponent } from './tabs-without-routing/tabs-without-routing.component';
import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [TabsWithoutRoutingComponent, TabsComponent, TabHostDirective],
  imports: [
    CommonModule,
    TabsRoutingModule,
    SharedModule
  ],
  entryComponents: [HomeTabComponent]
})
export class TabsModule { }
