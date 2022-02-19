import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable() //Es un decotador
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'vegeta',
          poder: 16000
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    constructor() {
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}