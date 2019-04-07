import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivePipe } from '@pages/home/active.pipe';
import { SelectFilteringItem } from '@ui/selects/select-filtering/model/select-filtering-item';
import { FormHelper } from './helpers/form.helper';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  items: SelectFilteringItem[] = [
    { code: '75000', label: 'Paris' },
    { code: '13000', label: 'Marseille' },
    { code: '69000', label: 'Lyon' },
    { code: '35000', label: 'Rennes' },
    { code: '59000', label: 'Lille' },
    { code: '33000', label: 'Bordeaux' },
    { code: '0600000', label: 'Niceddddddddddddddddddddddddddddddddd' },
  ];
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, public activePipe: ActivePipe) { }

  ngOnInit() {
    this.reactiveForm = FormHelper.createForm(this.fb);
    const activeFormControl = this.reactiveForm.get('active');

    // Link radio buttons and input for active form control
    activeFormControl.valueChanges.subscribe(val => activeFormControl.setValue(val, { emitEvent: false }));

    setTimeout(() => {
      this.reactiveForm.get('active').setValue('2', { emitEvent: false });
    }, 2000);
  }

  onSubmit() {
    console.log('form valid (reactive form)', this.reactiveForm.valid);
    console.log('form object (reactive form)', this.reactiveForm);
  }

}
