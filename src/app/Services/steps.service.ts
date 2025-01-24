import { Injectable } from '@angular/core';
import { IStep } from '../Interficies/i-step';
// import { StepsService } from '../services/steps.service';


@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps: IStep[] = [
      { id: 1,
        title: 'Dedica moltes hores:', 
        descripcion: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
        imagen: 'assets/meditation.svg', 
        bgcolor: '#f7797d' },
      { id: 2,
        title: 'Programa projectes propis:', 
        descripcion:"Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.", 
        imagen: 'assets/programming.svg', 
        bgcolor: '#C6FFDD' },
      { id: 3,
        title: 'Procura descansar:', 
        descripcion:  "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.", 
        imagen: 'assets/time_managment.svg', 
        bgcolor:'#fbd786'}
    ];
  
  getFrase(): IStep[] {
    return this.steps;
  }

  constructor() {
    console.log('StepsService initialized with data:', this.steps);
  }

}
