import { Component } from '@angular/core';
import { ToolBarComponent } from './toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ToolBarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
