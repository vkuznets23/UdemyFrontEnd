// let awsomeName: string = 'shake and bake'
// console.log(awsomeName)
// awsomeName = awsomeName.toUpperCase()
// console.log(awsomeName)

// let amount: number = 20
// console.log(amount)

// ------------ TYPES ------------

let string: string = 'hello'
const copies: string = string.repeat(2)
console.log(copies)

let num: number = 25
num = num + 2
console.log(num)

let isAdult: boolean = num >= 18
console.log(isAdult)
console.log(!isAdult)

// ------------ UNION ------------

const books = ['1984', 'Beauty and Ugly', 'Blabla']
let findBook: string | undefined

for (let book of books) {
  if (book === '1984') {
    findBook = book
    findBook.length
    break
  }
}

console.log(findBook, findBook?.length)

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'
orderStatus = 'delivered'
console.log(orderStatus)

let discount: number | string = 20
discount = '20%'
console.log(discount)

// ------------ ARRAYS ------------

let prices: number[] = [1, 2, 3, 4]
prices.push(2)

let fruit: string[] = ['apple', 'orange']
fruit.push('blablas')

let temperatures: number[] = [20, 25, 30, 35]
temperatures.push(40)

// ------------ OBJECTS ------------

// let car: { brand: string; year: number } = { brand: 'toyota', year: 1999 }

let book = { title: 'book', cost: 200 }
let pen = { title: 'pen', cost: 300 }
let notebook = { title: 'notebook' }

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]
console.log(items)

// items[0].title = 'hello'

let bike: { brand: string; year: number } = { brand: 'toyota', year: 1999 }
console.log(bike.brand)
// bike.year = "string"

let laptop: { brand: string; year: number } = { brand: 'apple', year: 1989 }
console.log(laptop.brand)
// let laptop2: { brand: string; year: number } = { brand: 'HP' }

let product1 = { title: 'Shirt', price: 20 }
let product2 = { title: 'Skirt' }
let products: { title: string; price?: number }[] = [product1, product2]
console.log(products)

// ------------ FUNCTIONS ------------

function sayHi(name: string): void {
  console.log(`Here is the name ${name.toUpperCase()}`)
}

sayHi('Vika')

function calculateDiscount(price: number): number {
  return price * 2
}

let pricePrice = calculateDiscount(3)
console.log(pricePrice)

let names: string[] = ['vika', 'masha', 'misha']

// function ifNameInArray(name: string): boolean {
//   for (let nameArr of names) {
//     if (nameArr === name) {
//       return true
//     }
//   }
//   return false
// }

function ifNameInArray(name: string): boolean {
  return names.includes(name)
}

console.log(ifNameInArray('vika'))
console.log(ifNameInArray('vika2'))

// ------------ OPTIONAL PARAMS ------------
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0)
}

console.log(calculatePrice(10, 5))

// ------------ DEFAULT PARAMS ------------
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints
}

console.log(calculateScore(100, 20))
console.log(calculateScore(100))

// ------------ REST PARAMS ------------
function sum(message: string, ...nums: number[]): string {
  const doubled = nums.map((num) => {
    num * 2
  })
  console.log(doubled)

  let total = nums.reduce((prev, cur) => {
    return prev + cur
  }, 0)

  return `${message} ${total}`
}

console.log(sum('The total is ', 1, 2, 3, 4, 5))

function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2)
  } else {
    console.log(input.toUpperCase())
  }
}

processInput(23)
processInput('hello')
