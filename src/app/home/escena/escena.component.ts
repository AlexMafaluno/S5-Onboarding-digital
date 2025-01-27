import { Component, inject, Input, NgModule, OnInit } from '@angular/core';
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
    [style({ transform: 'translateX(-100%)',backgroundColor: '*' }), 
    animate('.3s ease-out', style({ transform: 'translateX(0%)',backgroundColor: '*' }))], {
    optional: true,
    }),
    query(':leave', 
    [style({ transform: 'translateX(0%)',backgroundColor: '*'}), 
    animate('.3s ease-out', 
    style({ transform: 'translateX(100%)',backgroundColor: '*' }))], {
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
      [style({ transform: 'translateX(100%)', backgroundColor: '*' }),
      animate('.3s ease-out', style({ transform: 'translateX(0%)', backgroundColor: '*' }))], {
      optional: true,
    }),
    query(':leave',
      [style({ transform: 'translateX(0%)', backgroundColor: '*' }), 
      animate('.3s ease-out', 
        style({ transform: 'translateX(-100%)',backgroundColor: '*' }))], {
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


export class EscenaComponent implements OnInit{

@Input({required: true}) steps: IStep[] = [];

currentStep: number = 1;

ngOnInit() {
  // Forzar el cambio de currentStep en el inicio para que la animación se dispare desde el principio
  setTimeout(() => {
    this.currentStep = 1; // Asegura que currentStep tenga un valor para disparar la animación
  });
}

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
  console.log('Step actual', this.currentStep)
}

}
