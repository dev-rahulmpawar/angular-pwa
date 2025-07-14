import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrls: ['./nested-list.component.css']
})
export class NestedListComponent {
  @Input() items: any[] = [];

  removeItem(item: any): void {
  // Your logic to remove the item goes here
  // For example, assuming items is an array:
  this.items = this.items.filter(i => i !== item);
}

}