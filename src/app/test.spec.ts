import { Calculator } from './testservice'


describe('testservice', ()=> {

    let service: Calculator;

    beforeAll( () => {
        service = new Calculator();
    }
    )
    
    it('should add 2 numbers', () => {
        
        expect(service.add(2,2)).toBe(4);
    })
    it('should substrac 2 numbers', () => {
        
        expect(service.substract(2,2)).toBe(0);
    })
    it('should multiply 2 numbers', () => {
        expect(service.multiply(3,2)).toBe(6);
    })
})