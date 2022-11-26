import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/interfaces/singleproduct.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: product,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  cancel() {
    this.dialogRef.close()
  }
  confirm() {
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let soldedproduct= Number( (<HTMLInputElement>document.getElementById('soldedproduct')).value);
    this.data.description = description
    this.data.soldedproduct = soldedproduct
    this.dialogRef.close({ data: this.data })
  }

}
