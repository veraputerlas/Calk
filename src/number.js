function calc (num1, num2, apperand) {
    switch (apperand) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "/":
            return num1 / num2
        case "*":
            return num1 * num2
            default:
                console.log('Неизвестный оператор')
    }
}
const num1 = Number(prompt("Введите первое число"))
const num2 = Number(prompt("Введите второе число"))
const oper = prompt("Введите оператор")

console.log(calc(num1, num2, oper))

alert(`Ответ: ${calc(num1, num2, oper)}`)