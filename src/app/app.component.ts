import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arreglo             :number[]       = [1,2,3,4,5,6,7,8,9,10];
  arregloString       :string[]       = ["hola","mundo"];
  arregloAny          :any[]          = ["hola",1.56,"mundo"]

  nombre        :string         = "Capitan america";

  PI            :number         = Math.PI;
  Porcentaje: number = 0.231;
  salario :number = 1234.5;

  gabriel: Person = {
    id : 1,
    name :  'Gabriel',
    surname : 'Hernadez',
    birthday: new Date(1993, 8, 19)
  };
  constructor(){
    console.log(this.gabriel);
  }
  //Tipado de un objeto
  
}

interface Person {
  id : number;
  name : string;
  surname : string;
  birthday: Date;
}

