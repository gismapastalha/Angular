import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public texto = 'hola mundo'
  public frase = 'Hola mundo 2'
  public mostrar: boolean;
  colores: string[] = ['rojo','verde','azul'];
  numero = Math.floor(Math.random()*(11 - 1)) + 1;
  public tam: number = 25;
  alerta = "alert-danger";
  mensaje = '1';







  constructor() {
    this.mostrar = true;
  }

  ngOnInit(): void {
  }

}
