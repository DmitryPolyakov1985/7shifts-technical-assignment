function StringCalculator() {}

StringCalculator.prototype.add = function(stringNumbers) {
    let input = stringNumbers
    let formattedInput= ''

    if(stringNumbers == '') {
        return 0
    }
    // Process input with custom delimiter
    function formatInput(input){
        const delimiter = /^(\/\/.*\n)/
        const matches = delimiter.exec(input)
        if(matches && matches.length > 0){
            formattedInput += input.replace(delimiter,'')
            return formattedInput
        }
        formattedInput += stringNumbers
        return formattedInput
    }
    formatInput(input)

    // Split formatted input into separate numbers and store in an array
    let numbers = formattedInput
        .replace(/\W+/g, ',')
        .split(',')
        .map(num => parseInt(num, 10))
    console.log(`Numbers: ${numbers}`)

    // Filter and exclude numbers larger than 1000 and calculate total
    const totalSum = numbers.filter(num => num <= 1000).reduce((acc, num) => acc + num, 0)
    console.log(`Total is ${totalSum}`)
    return totalSum
}
const string1 = new StringCalculator()
string1.add('1001\n, \n2, 3')

module.exports = string1

