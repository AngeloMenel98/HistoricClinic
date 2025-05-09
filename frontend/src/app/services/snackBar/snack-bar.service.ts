import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private snackBar = inject(MatSnackBar);

  open(message: string, error?: HttpErrorResponse): void {
    if (error?.error.message && [400, 403, 404].includes(error.status))
      message = error.error.message;

    this.snackBar.open(message, 'Cerrar', { duration: 5000 });
  }
}
