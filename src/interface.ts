// alias type
type User = {
    name: string,
    age: number
}
const userWithTypeAlias: User = {
    name: "Rakib",
    age: 44
}

// interface type
interface IUser {
    name: string,
    age: number
}
const useWithInterface: IUser = {
    name: "Hasan Khan",
    age: 12,
}

// interface extend 
interface IExtendedUser extends IUser {
    experience: number
};

const userWithExtendUser: IExtendedUser = {
    name: "Monir Khan",
    age: 440,
    experience: 2
}

// const addNumber = (num1: number, num2: number): number => num1 + num2;
// alias 
type AddNumberType = (num1: number, num2: number) => number;

// interface
interface IAddNumbers {
    (num1: number, num2: number): number;
}
const addNumber: IAddNumbers = (num1, num2) => num1 + num2;

type RollType = number[];
interface IRoll {
    [index: number]: string;
}
const ourRolls: IRoll = ["1", "2", "3", "4"];