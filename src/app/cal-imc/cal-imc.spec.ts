import {imc} from "./cal-imc";

describe ('calculando imc',() =>{
    it('calculando a un gordo enano',() =>{
        let result = 0;
        
        result = imc(1.50,90);

        expect (result).toBe(40);
    })
})