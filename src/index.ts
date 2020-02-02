import { truth } from './lib/01'

// curry
function curry2(func: Function) {
  return function (secondArg: number) {
    return function (firstArg: number) {
      return func(firstArg, secondArg)
    }
  }
}

function divide(n: number, d: number) {
  return n / d
}

console.log(curry2(divide)(10)(2))
console.log(curry2(divide)(2)(10))