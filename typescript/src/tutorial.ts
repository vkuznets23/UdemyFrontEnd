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
console.log(value)

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
console.log(book1, book2, discountedBook)

// ------------ INTERFACES ------------
//like aliaces but only for objects

interface Book2 {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  printAuthor(): void
  printTitle(message: string): string
  printSomething: (someValue: number) => number
}

const deepWork: Book2 = {
  isbn: 123,
  title: 'deep book',
  author: 'jhony deep',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title} ${message}`
  },

  //1st option
  // printSomething: function (someValue) {
  //   return someValue
  // },

  //2nd option
  // printSomething: (someValue) => {
  //   console.log(this)
  //   console.log(deepWork.author)

  //   return someValue
  // },

  //3d option
  printSomething(someValue) {
    return someValue
  },
}

deepWork.title = 'new title'
deepWork.printAuthor()

const result = deepWork.printTitle('bla bla')
console.log(result)

console.log(deepWork.printSomething(34))

interface computer {
  readonly id: number
  brand: string
  ram: number
  storage?: number
  upgradeRam(ram: number): number
}

const laptop3: computer = {
  id: 1,
  brand: 'apple',
  ram: 2024,
  upgradeRam(ram) {
    this.ram += ram
    return this.ram
  },
}

console.log(laptop3.upgradeRam(20))

// ------ MERGING -----
interface Person {
  name: string
  getDetails(): string
}

interface DogOwner {
  dogName: string
  getDogDetails(): string
}

// basically i can add properties to the interface => now we have more data in the Person
interface Person {
  age: number
}

const jhon: Person = {
  name: 'jhon',
  age: 30,
  getDetails() {
    return `name: ${this.name} Age: ${this.age}`
  },
}
console.log(jhon.getDetails())

interface Employee2 extends Person {
  employeeId: number
}

// interface Employee2 extends Person, DogOwner {}

const jane: Employee2 = {
  employeeId: 1,
  name: 'jane',
  age: 25,
  getDetails() {
    return `name: ${this.name} Age: ${this.age} EmployeeId: ${this.employeeId}`
  },
}

console.log(jane.getDetails())

interface Person2 {
  name: string
}

interface DogOwner extends Person {
  dogName: string
}

interface Manager2 extends Person {
  managePeople(): void
  delegateTasks(): void
}

const employee: Person2 | DogOwner | Manager2 = getEmployee()
console.log(employee)

function getEmployee(): Person2 | DogOwner | Manager2 {
  const num = Math.random()
  if (num < 0.33) {
    return { name: 'jhon' }
  } else if (num < 0.66) {
    return { name: 'sarah', dogName: 'Pepe' }
  } else {
    return {
      name: 'Jepe',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    }
  }
}

// function isManager(obj: Person2 | DogOwner | Manager2): boolean {
function isManager(obj: Person2 | DogOwner | Manager2): obj is Manager2 {
  return 'managePeople' in obj
}

console.log(isManager(employee))
if (isManager(employee)) {
  employee.delegateTasks()
}

// TUPLES AND ENUMS
let person: [string, number] = ['jhon', 24]
console.log(person)

let date: readonly [number, number, number] = [2011, 23, 14]
// date.push(34)
// date.push(34)
// date.push(34)
console.log(date)

function getPerson(): [string, number] {
  return ['vika', 25]
}

let randonPerson = getPerson()
console.log(randonPerson)
console.log(randonPerson[0])
console.log(randonPerson[1])

let susanTuple: [string, number?] = ['susan']
console.log(susanTuple)

enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  Employee = 'Employee',
}

type User3 = {
  readonly id: number
  name: string
  role: UserRole
  contact: [string, string]
}

function CreateUser(user: User3): User3 {
  return user
}

const user: User3 = CreateUser({
  id: 1,
  name: 'vika',
  role: UserRole.Admin,
  contact: ['vik@email', '895645'],
})

console.log(user)

// TYPE ASSERTION
let someSomeValue: any = 'this is string'

let strLength: number = (someSomeValue as string).length
console.log(strLength)

let birdString = '{ "name": "Molly" }'

let birdObject = JSON.parse(birdString)
console.log(birdObject)

let unknownValue: unknown

unknownValue = 'hello world'
unknownValue = [23, 12, 4]
unknownValue = 23
unknownValue = 23.456

if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2)
}

enum Color {
  Red,
  Blue,
  // Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red'
    case Color.Blue:
      return 'Blue'
    default:
      // at build time
      let unexpectedColor: never = color
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`)
  }
}

console.log(getColorName(Color.Red)) // Red
console.log(getColorName(Color.Blue)) // Blue
// console.log(getColorName(Color.Green)); // Green

// Challenge - "typeof" guard
type ValueType = string | number | boolean

function checkValue(type: ValueType): void {
  if (typeof type === 'string') {
    console.log(type.toLocaleLowerCase())
    return
  } else if (typeof type === 'number') {
    console.log(type.toFixed(2))
    return
  } else {
    console.log(`boolean: ${type}`)
  }
}

checkValue('hello')
checkValue(34.566)
checkValue(true)

// Challenge - Equality Narrowing
type DogChallange = { type: 'dog'; name: string; bark: () => void }
type CatChallange = { type: 'cat'; name: string; meow: () => void }
type AnimalChallange = DogChallange | CatChallange

// function makeSound(animal: AnimalChallange): void {
//   if (animal.type === 'dog') {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }

function makeSound(animal: AnimalChallange): void {
  if ('bark' in animal) {
    animal.bark()
  } else {
    animal.meow()
  }
}

let doggy: DogChallange = {
  type: 'dog',
  name: 'Sparky',
  bark: () => console.log('woof-woof'),
}

let kitty: CatChallange = {
  type: 'cat',
  name: 'Mr. Noris',
  meow: () => console.log('meow-meow'),
}
makeSound(doggy)
makeSound(kitty)

//Challenge - "Truthy"/"Falsy" guard
function printLength(str: string | null | undefined): void {
  if (str) {
    console.log(str.length)
  } else {
    console.log('No string provided')
  }
}

printLength('hello')
printLength(null)
printLength(undefined)

//Challenge - "instanceof" type guard
function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString()
  } else {
    return input
  }
}

console.log(checkInput(new Date()))
console.log(checkInput('2020-05-05'))

//Challenge - Type Predicate
type StudentChallenge = {
  name: string
  study: () => void
}

type UserChallenge = {
  name: string
  login: () => void
}

type PersonChallenge = StudentChallenge | UserChallenge

const randomPerson = (): PersonChallenge => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') }
}

const personChallange = randomPerson()

function isStudentChallenge(
  person: PersonChallenge
): person is StudentChallenge {
  return 'study' in person
}

if (isStudentChallenge(personChallange)) {
  personChallange.study()
} else {
  personChallange.login()
}

//Challenge - Discriminated Unions and exhaustive check using the never type
type IncrementAction = {
  type: 'increment'
  amount: number
  timestamp: number
  user: string
}

type DecrementAction = {
  type: 'decrement'
  amount: number
  timestamp: number
  user: string
}

type ActionChallange = IncrementAction | DecrementAction

function reducer(currentState: number, action: ActionChallange): number {
  switch (action.type) {
    case 'increment':
      return currentState + action.amount
    case 'decrement':
      return currentState - action.amount
    default:
      // in case i add more options
      const unexpectedAction: never = action

      // to print that
      throw new Error(`Unexpected action: ${unexpectedAction}`)
  }
}

const newState = reducer(15, {
  user: 'john',
  type: 'increment',
  amount: 5,
  timestamp: 123456,
})

console.log(newState)

// GENERIC FUNDAMENTALS
// let array1: string[] = ['Apple', 'Banana', 'Mango']
// let array1: Array<string> = ['Apple', 'Banana', 'Mango']
// let array2: number[] = [1, 2, 3]
// let array3: boolean[] = [true, false, true]

function genericFunction<T>(arg: T): T {
  return arg
}

console.log(genericFunction<string>('Hello'))
console.log(genericFunction<number>(34))

interface genericInterface<T> {
  type: T
  getValue: () => T
}

const genericString: genericInterface<string> = {
  type: 'Hello world',
  getValue() {
    return this.type
  },
}

async function someFunc(): Promise<string> {
  return 'Hello world'
}

// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = []
//   result = Array(length).fill(value)
//   return result
// }
function generateStringArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  result = Array(length).fill(value)
  return result
}

console.log(generateStringArray<string>(3, 'hello'))
console.log(generateStringArray<number>(3, 42))
