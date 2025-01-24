import { Component, inject, Input, NgModule } from '@angular/core';
import { IStep } from '../../Interficies/i-step';
import { StepsService } from '../../Services/steps.service';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const left = [
  query(':enter, :leave', 
  style({ position: 'fixed', width: '100%' }), 
  { optional: true }),
  group([
    query(':enter', 
    [style({ transform: 'translateX(-100%)' }), 
    animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
    optional: true,
    }),
    query(':leave', 
    [style({ transform: 'translateX(0%)' }), 
    animate('.3s ease-out', 
    style({ transform: 'translateX(100%)' }))], {
    optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', 
    style({ position: 'fixed', width: '100%' }),
   { optional: true }),
  group([
    query(':enter', 
      [style({ transform: 'translateX(100%)' }),
      animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave',
      [style({ transform: 'translateX(0%)' }), 
      animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];


@Component({
  selector: 'app-escena',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('animSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})


export class EscenaComponent {

@Input({required: true}) steps: IStep[] = [];

currentStep: number = 1;
bgcolor: any;
incrementar() {
  if (this.currentStep != this.steps.length) {
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
