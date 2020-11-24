import {imc} from "./cal-imc";

describe ('calculando imc',() =>{
    it('calculando a un gordo enano',() =>{
        let result = 0;
        
        result = imc(1.50,90);

        expect (result).toBe(40);
    })
    it('calculando a un alto flaco',() =>{
        let result = 0;
        
        result = imc(1.80,60);

        expect (result).toBe(18.51851851851852);
    })
    it('calculando a alguien normal',() =>{
        let result = 0;
        
        result = imc(1.70,68);

        expect (result).toBe(23.529411764705884);
    })
    it('calculando a un mujer ',() =>{
        let result = 0;
        
        result = imc(1.50,54);

        expect (result).toBe(24);
    })
    it('calculando a persona random',() =>{
        let result = 0;
        
        result = imc(1.68,74);

        expect (result).toBe(26.218820861678008);
    })
    it('calculando a a mi mismoxd',() =>{
        let result = 0;
        
        result = imc(1.70,74);

        expect (result).toBe(25.605536332179934);
    })
    it('calculando a mi hermana',() =>{
        let result = 0;
        
        result = imc(1.49,54);

        expect (result).toBe(24.32322868339264);
    })
    it('calculando a persona ranndom',() =>{
        let result = 0;
        
        result = imc(1.64,54);

        expect (result).toBe(20.077334919690664);
    })
    it('calculando a mujer xd',() =>{
        let result = 0;
        
        result = imc(1.60,74);

        expect (result).toBe(28.906249999999993);
    })
    it('calculando lo de arriba x2',() =>{
        let result = 0;
        
        result = imc(1.50,40);

        expect (result).toBe(17.77777777777778);
    })
})