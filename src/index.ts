import { truth } from './lib/01'

// curry2
function curry2(func: Function) {
  return function (secondArg: number) {
    return function (firstArg: number | string) {
      return func(firstArg, secondArg)
    }
  }
}

function divide(n: number, d: number) {
  return n / d
}

console.log(curry2(divide)(10)(2))
console.log(curry2(divide)(2)(10))
console.log(curry2(parseInt)(2)('111'))

// curry3
function toHex(n: number) {
  const hex = n.toString(16)
  return hex.length < 2 ? [0, hex].join('') : hex
}
function rgbToHexString(r: number, g: number, b: number) {
  return ['#', toHex(r), toHex(g), toHex(b)].join('')
}
// 实现特定的颜色, 如蓝绿系
function curry3(func: Function) {
  return function (first: number) {
    return function (second: number) {
      return function (third: number) {
        return func(first, second, third)
      } 
    }
  }
}
const blueGreenClass = curry3(rgbToHexString)(255)(200)
console.log(blueGreenClass(0)) // #ffc800