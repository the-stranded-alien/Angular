// Basic Types
const myName: string = 'Sahil';
const myNum: number = 123;
const myBool: boolean = true;
const myAny: any = null;
const ten: number = 10;
const negative: number = -1000;
const decimal: number = 10.1000;
const noDef: undefined = undefined;
const noVal: null = null;

// Type Inference
let myNameVar = 'Sahil';
// myNameVar = 123;
myNameVar = 'Gupta';
// console.log(myNameVar);

let anotherVar;

if(1===1) {
    anotherVar = 'Str';
} else {
    anotherVar = 123;
}
// console.log(anotherVar);

// Why TS
const sentence = 'This is a sentence';
// console.log(sentence.includes('is'));

// Functions
const add = (a: number, b: number): number => {
    return a + b;
};
// console.log(add(3, 4));

const joinStrings = (a: string, b: string): string => {
    return a + ' ' + b;
}
// console.log(joinStrings('Sahil', 'Gupta'));

function multiply(a: number, b: number): number {
    return a * b;
}

const joinStringsAgain = function(a: string, b: string): string {
    return a + b;
}

// Objects
const post = {
    title: 'Latest TS News',
    daysOld: 10,
    published: true
}

const anotherPost: { title: string, daysOld: number, published: boolean } = {
    title: 'Latest TS News',
    daysOld: 10,
    published: true
}

const printPost = (postToPrint: { title: string, daysOld: number, published: boolean }) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
}

// console.log(printPost(anotherPost));

// Interface
interface Post {
    title: string,
    daysOld: number,
    published: boolean
}

const printPostAgain = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
}
// console.log(printPostAgain(anotherPost));

// Classes and Properties
class Car {
    color: string;
    year: number;
    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log('Vroom');
    }
}

const myCar = new Car('Red', 1997);
// myCar.drive();
// console.log(myCar.color, myCar.year);

// Public and Private
class AnotherCar {
    public color: string;
    private year: number;
    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log('Vroom');
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }
    getYear() {
        return this.year;
    }

    private putInGear() {

    }

    private pressPedal() {
        
    }

    private turnWheel() {
        
    }
}

const myAnotherCar = new AnotherCar('Red', 1997);
// myAnotherCar.drive();
// myAnotherCar.putInGear();
// console.log(myAnotherCar.color, myAnotherCar.getYear());

// Property Assignment Shortcut
class Truck {
    constructor(private color: string, private year: number) {}
    drive() {
        console.log('Vroom Vroom');
    }
}
const myTruck = new Truck('Blue', 2001);
// myTruck.drive();

// Enabling Decorator Support & using Decorators
const Component = (target: any) => {
    console.log(target);
};

@Component
class Boat {
    // Just an example
    // @Component year: number;

    // @Component
    // drive(@Component speed: number) {

    // }
}

// Component does not get called a second time 
const myBoat = new Boat();

// The Module System
import { Bus } from './Bus';
const myBus = new Bus(20);
// console.log(myBus.year);

// Strict Mode

// Combining Interfaces and Classes
interface Driveable {
    speed: number;
    drive(): string;
}
class RaceCar implements Driveable {
    speed = 10;
    drive() {
        return `I am driving at a speed of ${this.speed}`
    }
}
const myRaceCar = new RaceCar();
const startDriving = (vehicle: Driveable) => {
    console.log(vehicle.drive());
}
startDriving(myRaceCar);

// Class Generics
class NumberHolder {
    value: number;
}
const numberHolder = new NumberHolder();
numberHolder.value = 10;

class StringHolder {
    value: string;
}

const stringHolder = new StringHolder();
stringHolder.value = 'String';

class ValueHolder<T> {
    value: T;
}

const booleanHolder = new ValueHolder<boolean>();
booleanHolder.value = true;

// Function Generics
const numberWrapper = (value: number): number[] => {
    return [value];
}

const valueWrapper = <T>(value: T): T[] => {
    return [value];
}

console.log(valueWrapper('Val')); // Type Inference
console.log(valueWrapper<number>(2));




