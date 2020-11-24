import { Component, OnInit } from '@angular/core';
import {imc} from "../cal-imc/cal-imc";
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }
     
  result = 0;
  altura =0;
  peso=0;
  edad=0;
  sexo= Boolean; 

  ngOnInit(): void {
  }
  imc() {
    let myresult = 0;
    myresult = imc(this.peso, this.altura);
    this.result = myresult;
  }
  opciones(){
    if(this.result<30){

      

    }
  }
}
