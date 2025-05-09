import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

export interface StepConfig {
  label: string;
  formGroup: AbstractControl;
  templateId: string; // Añadir identificador
}

@Component({
  selector: 'app-stepper',
  imports: [MatStepperModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  @Input() steps: StepConfig[] = [];
  @Input() isLoading = false;

  // Obtener los templates proyectados
  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;

  getStepControl(step: StepConfig): AbstractControl {
    return step.formGroup;
  }

  // Obtener template por ID
  getTemplate(templateId: string): TemplateRef<any> | undefined {
    return this.templates.find(
      (t) => (t as any)._declarationTContainer.id === templateId,
    );
  }
}
