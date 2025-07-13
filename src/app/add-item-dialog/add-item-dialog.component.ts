import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html'
})
export class AddItemDialogComponent {
  selectedItem: any;

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { options: any[] }
  ) {}

  onAdd() {
    this.dialogRef.close(this.selectedItem);
  }
}
