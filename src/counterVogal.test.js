const counterVogal = require('./counterVogal');

describe('Should count number of vowels of a given string', () => {

    test('Should be a function', () => {
        expect(counterVogal).toBeInstanceOf(Function);
    })

    test('Should return an error if parameter is not a string', () => {
        expect( () => {
            counterVogal(32)
        }).toThrow(Error)
    })

    test('Should count vowels of strings with one or more words', () => {
        expect(counterVogal('Meus primeiros testes com javascript')).toBe(12)
    })

    test('Should count vowels a, e, i, o, u', () => {
        expect(counterVogal('DoWhile')).toBe(3)
    })

    test('Should count uppercase and lowercase vowels', () => {
        expect(counterVogal('RockEtsEat')).toBe(4)
    })

})
