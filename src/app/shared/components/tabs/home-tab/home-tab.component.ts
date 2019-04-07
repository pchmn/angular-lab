import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TabComponent } from './../tab.component';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements TabComponent, OnInit {

  id: string;
  name: string;
  active = true;
  isCloseable: boolean;
  scrollPosition = 0;
  @Output() openNewTabEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  scrollToPreviousPosition() {
    window.scrollTo(0, this.scrollPosition);
  }

}
