const counterVogal = (string) => {
    
    if(string === undefined || typeof string !== 'string') {
        throw new Error('You should pass a string as argument')
    };
    
    const vowels = /[aeiou]/gi;
    const result = string.match(vowels);

    return result.length;
}


module.exports = counterVogal