import { Component, OnInit } from '@angular/core';
import { concatMapTo } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Maestro',
    poder: 100000
  }

  constructor( ) { //Inyeccion de dependencias
  
  }

}
