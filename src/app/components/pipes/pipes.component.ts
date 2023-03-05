import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  nombre = 'Ouissam Talha';
  //PI = Math.PI;
  PI = 3.0005;
  ratio = 0.8;
  sueldo = 30.80;




  constructor() { }

  ngOnInit(): void {
  }

}
