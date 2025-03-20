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

// ------------ OBJECTS AS PARAMS ------------
function createEmployee({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id, isActive: id % 2 === 0 }
}

console.log(createEmployee({ id: 12 }))
console.log(createEmployee({ id: 13 }))

// alternative
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
  id: 5,
  name: 'anna',
  // email: 'gmail',
}

createStudent(newStudent)
// createStudent({ id: 1, name: 'sarha', email: 'gmail' })

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) {
  if (typeof input === 'number') {
    return input * input
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase()
  }
}

console.log(processData('hello', { reverse: true }))
console.log(processData('hello'))
console.log(processData(3, { reverse: true }))
console.log(processData(3))

// ------------ ALIAS ------------
type User = { id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
}
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)
  return user
}

createUser(john)
createUser(susan)

type StringOrNumber = string | number
let value: StringOrNumber
value = 'hello'

type Employee = { id: number; name: string; department: string }
type Manager = { id: number; name: string; employees: Employee[] }
type Staff = Employee | Manager

function printStaffDetails(t: Staff): void {
  if ('employees' in t) {
    const len = t.employees.length
    console.log(`manager that has ${len} employees`)
  } else {
    console.log(`employee, his department us ${t.department}`)
  }
}

const jere: Employee = {
  id: 2,
  name: 'jere',
  department: 'delivery',
}

const helen: Employee = {
  id: 3,
  name: 'helen2',
  department: 'support team',
}

const vika: Manager = {
  id: 1,
  name: 'vika',
  employees: [jere, helen],
}

printStaffDetails(vika)
printStaffDetails(jere)

// ------------ INTERSECTION TYPE ------------

type Book = { id: number; name: string; price: number }
type discountedBooks = Book & { discount: number }

const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
}

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
}

const discountedBook: discountedBooks = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
}
