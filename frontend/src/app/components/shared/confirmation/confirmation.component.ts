import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation',
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  data: { title: string; message?: string } = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  confirm() {
    this.dialogRef.close({ isConfirmed: true });
  }
}
