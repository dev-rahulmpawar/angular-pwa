import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Icarus Resource Manager';
  items: any[] = [];

  itemOptions = [
    { name: 'Solar Panel', icon: 'assets/icons/solar.png' },
    { name: 'Battery Pack', icon: 'assets/icons/battery.png' },
    { name: 'Wind Turbine', icon: 'assets/icons/wind.png' }
  ];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  addItem() {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
    data: { options: this.itemOptions }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const newItem = {
        title: result.name,
        content: `<p>Selected: ${result.name}</p><img src="${result.icon}" width="100">`,
        children: []
      };
      this.items.push(newItem);

      // Backend API call
      //this.http.post('https://your-api.com/add', newItem).subscribe();
    }
  });
  }

  removeItem(index: number) {
    const removedItem = this.items.splice(index, 1)[0];

    // API call to backend
    //this.http.post('https://your-api.com/remove', removedItem).subscribe();
  }
}
