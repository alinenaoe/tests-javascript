const counterVowel = require('./counterVowel');

describe('Should count number of vowels of a given string', () => {

    test('Should be a function', () => {
        expect(counterVowel).toBeInstanceOf(Function);
    })

    test('Should return an error if parameter is not a string', () => {
        expect( () => {
            counterVowel(32)
        }).toThrow(Error)
    })

    test('Should count vowels of strings with one or more words', () => {
        expect(counterVowel('Meus primeiros testes com javascript')).toBe(12)
    })

    test('Should count vowels a, e, i, o, u', () => {
        expect(counterVowel('DoWhile')).toBe(3)
    })

    test('Should count uppercase and lowercase vowels', () => {
        expect(counterVowel('RockEtsEat')).toBe(4)
    })

})
