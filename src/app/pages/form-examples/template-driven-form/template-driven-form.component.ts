import { Component, OnInit } from '@angular/core';
import { ActivePipe } from '../../home/active.pipe';
import { SelectFilteringItem } from 'src/app/ui/selects/select-filtering/model/select-filtering-item';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  userInfo = {
    firstName: null,
    lastName: null,
    active: '1',
    city: null
  };
  items: SelectFilteringItem[] = [
    { code: '75000', label: 'Paris' },
    { code: '13000', label: 'Marseille' },
    { code: '69000', label: 'Lyon' },
    { code: '35000', label: 'Rennes' },
    { code: '59000', label: 'Lille' },
    { code: '33000', label: 'Bordeaux' },
  ];

  constructor(public activePipe: ActivePipe) { }

  ngOnInit() {
    setTimeout(() => {
      this.userInfo.active = '2';
    }, 2000);
  }

  onSubmit(form: any) {
    console.log('user info (template driven form)', this.userInfo);
    console.log('form valid (template driven form)', form.valid);
    console.log('form object (template driven form)', form);
  }

}
