import { Component, inject, Input, NgModule } from '@angular/core';
import { IStep } from '../../Interficies/i-step';
import { StepsService } from '../../Services/steps.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

@Input({required: true}) steps: IStep[] = [];

currentStep: number = 0;
list: Array<number> = [1, 2, 3];

incrementar() {
  if (this.currentStep != this.list.length - 1) {
  this.currentStep++;
  }
}
decrementar() {
  if(this.currentStep > 0) {
  this.currentStep--;
}
}

constructor() {
  console.log('Hola desde costructor escea:', this.steps)
}

}
