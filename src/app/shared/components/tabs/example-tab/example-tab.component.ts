import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab.component';

@Component({
  selector: 'app-example-tab',
  templateUrl: './example-tab.component.html',
  styleUrls: ['./example-tab.component.scss']
})
export class ExampleTabComponent implements TabComponent, OnInit {

  id: string;
  name: string;
  active: boolean;
  isCloseable: boolean;
  scrollPosition = 0;

  constructor() { }

  ngOnInit() {
  }

  scrollToPreviousPosition() {
    console.log('scroll posiiton', this.scrollPosition);
    setTimeout(() => window.scrollTo(0, this.scrollPosition));
  }

}
