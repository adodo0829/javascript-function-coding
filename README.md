## JavaScript函数式编程总结
- 几种编程方式  
OOP: 将问题分解为多组'名词', 属性和方法(自带上下文的函数)集合, 组合构建更大的对象, 属性导向;  
     基于原型的面向对象编程的方式    
OFP: 将问题分解为多组'动词',独立的, 组合构建更大的函数, 行为导向;  
     通过函数将值转换为抽象单元, 以实现更多的行为 用以构建软件系统.  
命令式: 通过详细描述行为的编程方式  
元编程: 对 JS 执行模型数据进行编写和操作的编程方式, 如 Reflect 对象, this对象  

### 一等函数
- 存储在变量中
- 存储在数组元素中
- 存储在对象的字段中
- 根据行为进行创建
- 被当作参数在传递到其他函数
- 被当作返回值在函数中返回

### 变量的作用域和闭包
- 作用域
```
词法作用域:一个变量的可见性以及文本表述的模拟值  
动态作用域:程序在运行时的变量所在的运行环境, 核心就是维护一个命名绑定栈的全局映射表
         this由调用者决定  
全局作用域:变量在整个程序中生效  
函数作用域:变量在函数体内部范围有效  
块级作用域:es6引入的let&&const声明, 暂时可以认为是在{}语句中有效  
```
- 闭包
一个函数, 运行时会捕获作用域内的外部绑定值
```
自由变量: 函数内部在有没有任何局部声明之前使用的变量
变量遮蔽: 同名变量, 就近原则绑定
私有数据: 函数内部声明局部变量
```

### 高阶函数
函数作为参数  
函数作为返回值  
让函数可配置  

### 函数组合
通过函数来构建函数  
- 柯里化 currying  
每一个参数都会返回一个新的函数,逐渐消耗参数  
```
// 接受一个函数, 返回一个只接受一个参数的函数
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
// 将 divide 函数需要的参数分别剥离出来, 参数的顺序决定了函数的行为
// 这样我们可以定制函数的行为
console.log(curry2(divide)(10)(2)) // 0.2
console.log(curry2(divide)(2)(10)) // 5
console.log(curry2(parseInt)(2)('111')) // 7

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
```
- 部分应用构建函数  
组合函数和参数,局部调用一些函数
```
1.作为前置条件,函数的调用者的担保
2.后置条件, 保证调用的结果
```
### 递归函数
- 递归三部曲:  
```
1.终止条件
2.执行一个步骤
3.分解为更小的问题

通常是解决搜索或者处理嵌套的数据结构
```
- 生成器  
```
头部: 检测当前值的函数
尾部: 一个递归调用的函数
```

### 链式调用和管道处理
前者一般通过返回this 对象实现  
后置通过多个函数的调用, 依次处理上一个函数的返回的结果