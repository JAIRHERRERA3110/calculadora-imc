import { transformAll } from '@angular/compiler/src/render3/r3_ast';

export function imc(altura, peso){
let alturat = altura * altura;
let total = peso/alturat;
return total;

}