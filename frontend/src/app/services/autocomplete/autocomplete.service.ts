import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AutoCompleteService {
  createFiltered<T>(
    control: FormControl,
    list$: Observable<T[]>, // Recibir Observable
    displayKeys: string[] = ['name'],
    limit: number = 4,
  ): Observable<T[]> {
    return combineLatest([
      control.valueChanges.pipe(startWith('')),
      list$.pipe(startWith([] as T[])),
    ]).pipe(
      map(([value, list]) => {
        const filterValue = (value || '').toString().toLowerCase();
        return this._filteredList(filterValue, list, displayKeys).slice(
          0,
          limit,
        );
      }),
    );
  }

  private _filteredList(
    value: string,
    list: any[],
    displayKeys: string[],
  ): any[] {
    const filterValue = value.toLowerCase();

    return list.filter((item) => {
      const concatenatedValue = displayKeys
        .map((key) => item[key])
        .join(' ')
        .toLowerCase();

      return concatenatedValue.includes(filterValue);
    });
  }
}
