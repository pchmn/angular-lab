import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';
import { AbstractValueAccessor } from '../../abstract-value-accessor';
import { SelectFilteringItem } from './model/select-filtering-item';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-filtering',
  templateUrl: './select-filtering.component.html',
  styleUrls: ['./select-filtering.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectFilteringComponent),
    multi: true
  }]
})
export class SelectFilteringComponent extends AbstractValueAccessor<SelectFilteringItem> implements OnInit {

  @Input() items: SelectFilteringItem[];
  @Input() placeholderSelect = 'Select an item...';
  @Input() placeholderFilter = 'Search for...';
  itemsFiltered: SelectFilteringItem[] = [];
  filter = '';

  constructor(private el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.itemsFiltered = [...this.items];
  }

  onFiltering(filter: string) {
    this.filter = filter;
    const filterLowerCase = this.filter.toLowerCase();
    this.itemsFiltered = this.items.filter(item =>
      item.code.toLowerCase().includes(filterLowerCase) || item.label.toLowerCase().includes(filterLowerCase));
  }

  onSelectItem(item: SelectFilteringItem) {
    this.value = item;
  }

  onOpenChange(isOpen: boolean) {
    setTimeout(() => {
      const inputFilter = this.el.nativeElement.querySelector('input');
      const itemsDiv = this.el.nativeElement.querySelector('.items');
      if (isOpen && inputFilter && itemsDiv) {
        // If dropdown is open, autofocus on filter input
        inputFilter.focus({ preventScroll: true });
        // Scroll to top of items
        itemsDiv.scrollTop = 1; // Workaround to show scroll bar on osx
        itemsDiv.scrollTop = 0;
      } else if (!isOpen) {
        // If dropdown is closed, reset filtering
        this.filter = '';
        this.itemsFiltered = [...this.items];
      }
    });
  }

}
