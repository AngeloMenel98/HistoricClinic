import { Component } from '@angular/core';
import { ToolBarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-layout',
  imports: [ToolBarComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
