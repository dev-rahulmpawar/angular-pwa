import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html'
})
export class NestedListComponent {
  @Input() items: any[] = [];
}