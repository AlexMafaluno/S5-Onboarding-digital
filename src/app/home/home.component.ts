import { Component, inject } from '@angular/core';
import { IStep } from '../Interficies/i-step';
import { CommonModule } from '@angular/common';
import { StepsService } from '../Services/steps.service';
import { EscenaComponent } from './escena/escena.component';

@Component({
  selector: 'app-home',
  imports:[CommonModule, EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  /**
   * An array of IStep objects representing the phrases.
   */
  steps: IStep[]= [];

  private StepsService = inject(StepsService);

  loadFrases() {
    this.steps= this.StepsService.getFrase();
    console.log('Steps in HomeComponent:', this.steps);
  }

  constructor() {
    this.loadFrases();
    
}
}