import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'Icarus Resource Manager';
  items: any[] = [];

  constructor(private http: HttpClient) {}

  addItem() {
    const newItem = {
      title: 'New Item',
      content: '<p>Enter content here</p>',
      children: []
    };
    this.items.push(newItem);

    // API call to backend
    //this.http.post('https://your-api.com/add', newItem).subscribe();
  }

  removeItem(index: number) {
    const removedItem = this.items.splice(index, 1)[0];

    // API call to backend
    //this.http.post('https://your-api.com/remove', removedItem).subscribe();
  }
}
