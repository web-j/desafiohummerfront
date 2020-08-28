import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-guest-form',
  templateUrl: './dialog-guest-form.component.html',
  styleUrls: ['./dialog-guest-form.component.scss']
})
export class DialogGuestFormComponent implements OnInit {

  constructor(
    public snack: MatSnackBar,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogGuestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  toast(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}
