import { Component } from '@angular/core';
import { HijaComponent } from "./components/padre-hija/hija/hija.component";
import { CommonModule } from '@angular/common';
import { EscenaComponent } from './home/escena/escena.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
enviarMensajeAlPadre() {
throw new Error('Method not implemented.');
}
mensajeDesdeHija: any;
recibirMensaje($event: string) {
throw new Error('Method not implemented.');
}
  title : string = 'onBoarding';
mensajeParaHija: any;
mensaje: any;
}
