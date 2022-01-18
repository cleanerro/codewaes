const numbers = '1 4 7 9 7 -5'


function highAndLow(numbers){
    const numbersArray = numbers.split(' ').map(Number)
    const min = Math.min.apply(null, numbersArray)
    const max = Math.max.apply(null, numbersArray)
    return `${max} ${min}`
}

highAndLow(numbers)

