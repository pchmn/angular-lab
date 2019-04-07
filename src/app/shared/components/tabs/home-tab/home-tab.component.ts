import { Component, OnInit } from '@angular/core';
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
  content: string;

  constructor() { }

  ngOnInit() {
  }

}
