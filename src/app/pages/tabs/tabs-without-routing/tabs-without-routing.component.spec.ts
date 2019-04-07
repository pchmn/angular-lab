import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithoutRoutingComponent } from './tabs-without-routing.component';

describe('TabsWithoutRoutingComponent', () => {
  let component: TabsWithoutRoutingComponent;
  let fixture: ComponentFixture<TabsWithoutRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsWithoutRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsWithoutRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
