import { Component, Input, OnInit } from '@angular/core';
import { IStep } from '../../Interficies/i-step';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

function createAnimation(direction: 'left' | 'right') {
  const enterTransform = direction === 'left' ? 'translateX(-20%)' : 'translateX(20%)';
  const leaveTransform = direction === 'left' ? 'translateX(20%)' : 'translateX(-20%)';

  return [
    query(':enter, :leave', 
    style({ position: 'fixed', width: '100%' }), 
    { optional: true }),
    group([
      query(':enter', 
      [style({ transform: enterTransform ,opacity: 0.5 }), 
      animate('.3s ease-out', style({ transform: 'translateX(0%)',opacity: 1 }))], {
      optional: true,
      }),
      query(':leave', 
      [style({ transform: 'translateX(0%)',opacity: 1}), 
      animate('.3s ease-out', 
      style({ transform: leaveTransform ,opacity: 0.5 }))], {
      optional: true,
      }),
    ]),
  ];
}

const left =  createAnimation('left');
const right =  createAnimation('right');

/*
const left = [
  query(':enter, :leave', 
  style({ position: 'fixed', width: '100%' }), 
  { optional: true }),
  group([
    query(':enter', 
    [style({ transform: 'translateX(-20%)',opacity: 0.5 }), 
    animate('.3s ease-out', style({ transform: 'translateX(0%)',opacity: 1 }))], {
    optional: true,
    }),
    query(':leave', 
    [style({ transform: 'translateX(0%)',opacity: 1}), 
    animate('.3s ease-out', 
    style({ transform: 'translateX(20%)',opacity: 0.5 }))], {
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
      [style({ transform: 'translateX(20%)',opacity: 0  }),
      animate('.3s ease-out', style({ transform: 'translateX(0%)',opacity: 1 }))], {
      optional: true,
    }),
    query(':leave',
      [style({ transform: 'translateX(0%)', opacity: 1 }), 
      animate('.3s ease-out', 
        style({ transform: 'translateX(-20%)',opacity: 0.5 }))], {
      optional: true,
    }),
  ]),
];
*/

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
